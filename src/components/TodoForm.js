import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input, setInput] = useState("");

    const inputRef = useState(null);

    // automatic focusing on the input window
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    // keeps from add task button to refresh the page while pressing it
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: 1+ Math.random(),
            text: input
        });

        setInput("")
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update task'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
          
        </>
      ) : (
        <>
          <input
            placeholder='Add a new task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add task
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm
