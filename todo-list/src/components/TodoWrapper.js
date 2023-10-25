import React, {useState} from 'react'
import { Todoform } from './Todoform.js';

 


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
      setTodos([...todos, {id:uuidv4(), task:todo,
         completed: false, isEdititng:false}])
      }
  return (
    <div className='TodoWrapper'>
     <Todoform addTodo = {addTodo}/>  
        </div>
  )
}
