import React from 'react'

export default function Todo({ todo , toggleTodo}) {
    function handleTodoCLick() {
        toggleTodo(todo.id)
    }
  return (
    <div>
        <label>
            <input type='checkbox' checked={todo.complete} onChange=
            {handleTodoCLick}/>
            {todo.name}
        </label>
    </div>
  )
}
