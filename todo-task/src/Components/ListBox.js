import React, { PureComponent } from 'react'
import ListRow from './ListRow'

class ListBox extends PureComponent {

  render() {
    if (!this.props.database.length) {
      return (
        <div className="listBox">
          <div className="listRow">
            <div className="noData">
              No Data Found !
            </div>
          </div>

        </div>)
    }

    return (
      <div className="listBox">
        {
          this.props.database.map(t => {
            return <ListRow key={t.id}
              taskID={t.id}
              taskName={t.name}
              taskCompleted={t.completed}
              editID={this.props.editID}
              deleteTask={this.props.deleteTask}
              tickHandler={this.props.tickHandler}
              editTaskHandler={this.props.editTaskHandler}
              deleteTaskHandler={this.props.deleteTaskHandler}
              editTaskName={this.props.editTaskName}
              cancelEditTask={this.props.cancelEditTask}
            />
          })
        }
        
        <div className="listRow noData">
          <div>
            {this.props.database.length} items left
          </div>
        </div>

      </div>)

  }
}

export default ListBox