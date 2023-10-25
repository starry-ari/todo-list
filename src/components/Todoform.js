
import React, {useState} from 'react'

export const Todoform = ({addTodo}) => {
    const [val, setVal] = useState("")
    const handleSubmit = e => {
      e.preventDefault();
      addTodo(val)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" className='todo-input' placeholder='List task here!' 
    onChange={(e) => setVal(e.target.val)}/>
    <button type='submit' className='todo-btn'>+</button>
    </form>

    //Saves tasks
  );
}
 