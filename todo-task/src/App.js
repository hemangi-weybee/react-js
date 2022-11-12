import './App.css'
import './style.css'
import Header from './Components/Header'
import InputBar from './Components/InputBar'
import ListBox from './Components/ListBox'
import Controller from './Components/Controller'
import React, { Component } from 'react'
import baseData from './data.json'

class App extends Component {

  constructor() {
    super()

    this.state = {
      activeBtn: null,
      currentOpt: "all",
      actionOpt: 0,
      sortOpt: 0,
      editID: null,
      taskName: '',
      deleteTask: false,
      database: [],
      remaining: [],
    }
  }

  componentWillMount() {
    const data = baseData

    this.setState({
      remaining: data
    })
  }

  componentDidMount() {
    this.setState({
      database: this.state.remaining,
      remaining: []
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.editID === this.state.editID || !this.state.editID)
      return document.querySelector('.esc').innerHTML = ""

    return document.querySelector('.esc').innerHTML = "Press `ESC` to Cancel"
  }

  inputHandler = (e) => {
    const taskName = e.target.value.trim()

    this.setState({
      taskName: taskName
    }, () => {
      if (this.state.activeBtn === 1) this.searchTaskHandler()
      if (e.key === "Enter") {
        if (this.state.activeBtn === 0) this.addTaskHandler()
        if (this.state.activeBtn === 1) this.searchTaskHandler()
      }
    })
  }

  addTaskHandler = () => {
    this.setState({ activeBtn: 0 },
      () => {
        if (this.state.taskName) {
          const dbCopy = [...this.state.database]
          const newTask = {
            id: Date.now(),
            name: this.state.taskName,
            completed: this.state.currentOpt === "completed" ? true : false
          }
          dbCopy.push(newTask)

          this.setState({
            database: dbCopy,
            taskName: '',
          }, () => {
            document.querySelector('#inputBox').value = ''
            this.sortChangeHandler()
          })
        }
      })
  }

  searchTaskHandler = () => {
    this.setState({ activeBtn: 1 },
      () => {
        const data = this.state.taskName
        let mainDB = [...this.state.database, ...this.state.remaining]
        if (data) {
          if (this.state.currentOpt !== 'all') mainDB = [...this.state.database]
          const searched = mainDB.filter(t => t.name.toLowerCase().includes(data.toLowerCase()) === true)
          const notMatched = mainDB.filter(t => t.name.toLowerCase().includes(data.toLowerCase()) === false)
          const remaining = [...new Map([...this.state.remaining, ...notMatched].map((m) => [m.id, m])).values()]

          this.setState({
            database: searched,
            remaining: remaining,
          })

        } else {
          this.clickHandler()
        }
      })
  }

  editTaskHandler = (e) => {
    this.setState({
      editID: e.target.closest('.listRow').id,
    })
  }

  cancelEditTask = () => {
    this.setState({
      editID: null,
    })
  }

  editTaskName = (e) => {
    if (e.key === "Escape") {
      this.cancelEditTask()
    }

    if (e.key === "Enter") {
      if (e.target.value.trim()) {
        const dbCopy = this.state.database.map(t => {
          return t.id === Number(this.state.editID) ? { ...t, name: e.target.value } : { ...t }
        })
        this.setState({
          database: dbCopy,
          editID: null,
        })
      }
    }
  }

  deleteTaskHandler = (e) => {
    this.setState({
      deleteTask: true
    }, () => {
      const taskID = (e.target.closest('.listRow').id)
      const dbCopy = this.state.database.filter(t => t.id !== Number(taskID))

      this.setState({
        deleteTask: false,
        database: dbCopy
      })
    })
  }

  tickHandler = (e) => {
    if (e.target.classList.contains('chkTask')) {
      const taskID = e.target.closest('.listRow').id
      const dbCopy = this.state.database.map(t => {
        return t.id === Number(taskID) ? { ...t, completed: !t.completed } : { ...t }
      })

      this.setState({
        database: dbCopy
      })
    }
  }

  clickHandler = (e) => {
    let displayDB = [], remaining = []
    let selector = this.state.currentOpt
    if (e) selector = e.target.id
    switch (selector) {
      case "all": {
        displayDB = [...this.state.database, ...this.state.remaining]
        break
      }
      case "active": {
        const mainDB = [...this.state.database, ...this.state.remaining]
        displayDB = mainDB.filter(t => t.completed === false)
        remaining = mainDB.filter(t => t.completed !== false)
        break
      }
      case "completed": {
        const mainDB = [...this.state.database, ...this.state.remaining]
        displayDB = mainDB.filter(t => t.completed === true)
        remaining = mainDB.filter(t => t.completed !== true)
        this.setState({
          database: displayDB,
          remaining: remaining
        })
        break
      }
      default: { }
    }

    this.setState({
      currentOpt: selector,
      database: displayDB,
      remaining: remaining
    }, () => {
      if (this.state.taskName) this.searchTaskHandler()
      this.sortChangeHandler()
    })
  }

  actionChangeHandler = (e) => {

    this.setState({
      actionOpt: e.target.selectedIndex
    }, () => {
      let copy = [...this.state.database]
      switch (Number(e.target.selectedIndex)) {
        case 1: {
          copy = this.state.database.filter(t => t.completed === false)
          break
        }
        case 2: {
          copy.forEach(t => t.completed = true)
          break
        }
        case 3: {
          copy.forEach(t => t.completed = false)
          break
        }
        default: { }
      }

      this.setState({
        database: copy,
        actionOpt: 0,
      })
    })
  }

  sortChangeHandler = (e) => {
    let opt = this.state.sortOpt
    if (e) { opt = Number(e.target.selectedIndex) }
    let copy = [...this.state.database]

    switch (Number(opt)) {
      case 1: {
        copy = copy.slice().sort((a, b) => {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()
          if (nameA < nameB) return -1
          if (nameA > nameB) return 1

          return 0
        })
        break
      }
      case 2: {
        copy = copy.slice().sort((a, b) => {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()
          if (nameA > nameB) return -1
          if (nameA < nameB) return 1
          return 0
        })
        break
      }
      case 3: {
        copy = copy.slice().sort((a, b) => a.id - b.id)
        break
      }
      case 4: {
        copy = copy.slice().sort((a, b) => b.id - a.id)
        break
      }
      default: { }
    }

    this.setState({
      sortOpt: opt,
      database: copy,
    })
  }

  render() {

    return (
      <section>
        <Header />

        <InputBar
          database={this.state.database}
          activeBtn={this.state.activeBtn}
          inputHandler={this.inputHandler}
        />

        <ListBox
          database={[...this.state.database]}
          activeBtn={this.state.activeBtn}
          currentOpt={this.state.currentOpt}
          editID={this.state.editID}
          deleteTask={this.state.deleteTask}
          tickHandler={this.tickHandler}
          editTaskHandler={this.editTaskHandler}
          deleteTaskHandler={this.deleteTaskHandler}
          editTaskName={this.editTaskName}
          cancelEditTask={this.cancelEditTask}
        />

        <Controller
          database={this.state.database}
          activeBtn={this.state.activeBtn}
          currentOpt={this.state.currentOpt}
          actionOpt={this.state.actionOpt}
          sortOpt={this.state.sortOpt}
          addTaskHandler={this.addTaskHandler}
          searchTaskHandler={this.searchTaskHandler}
          actionChangeHandler={this.actionChangeHandler}
          sortChangeHandler={this.sortChangeHandler}
          clickHandler={this.clickHandler}
        />

        {/* <div>
          {
            data.map(d => {
              return <div key={d.id}> {d.company} </div>
            })
          }
        </div> */}

      </section>

    )
  }
}

export default App