import React, {useState} from 'react'
import { Todoform } from './Todoform.js';
import {v4 as uuidv4 } from 'uuid';
uuidv4();
 


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
      setTodos([...todos, {id: uuidv4(), task:todo,
         completed: false, isEdititng:false}])
      }
  return (
    <div className='TodoWrapper'>
     <Todoform addTodo = {addTodo}/>  
        </div>
  )
}
