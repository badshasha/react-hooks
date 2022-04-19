import React , {useEffect , useState, useSyncExternalStore } from 'react'
import HOC from './Hoc'

function Todo({data}) {


  return (
    <div>     
    

        {
            data.map((filterTodo) => {
                return (<p key={filterTodo.id}>{filterTodo.name}</p>)
            })
        }

       
    </div>
  )
}

const TodoNew = HOC(Todo,"todo");
export default TodoNew;