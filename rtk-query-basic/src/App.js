import React, { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} from './services/todoSlice';
import 'react-datepicker/dist/react-datepicker.css';

function App() {

  const [taskName, setTaskName] = useState('');

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  console.log(todos)

  if (isLoading) {
    return (<p> LOADING... </p>)
  } else if (isError) {
    return (<p> {error} </p>)
  } else if (isSuccess) {
    return (
      <div className="App">

        <div className="input-header">
          <input className="input-bar"
            type="text"
            placeholder="Enter Task name"
            onChange={(e) => { setTaskName(e.target.value) }}></input>

          <button className="add-btn"
            onClick={() => addTodo({ id: Date.now(), title: taskName, completed: false })}> Add </button>
        </div>

        <div className="todo-list">

          {
            todos.map(item => (
              <div className="todo-item" key={item.id}>

                <div className="check-todo">
                  <input checked={item.completed}
                    id={item.id}
                    type="checkbox"
                    onChange={() => updateTodo({ ...item, completed: !item.completed })}></input>
                </div>

                <div className="todo-title"> <label htmlFor={item.id}> {item.title} </label> </div>

                <button className="del-btn"
                  onClick={() => deleteTodo({id: item.id})}> Delete </button>
              </div>
            ))
          }
        </div>
        

      </div >
    )
  }

}

export default App;