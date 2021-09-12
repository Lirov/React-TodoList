import React, {useState, useEffect} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const DateTime = () => {
        const [date, setDate] = useState(new Date());

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return <p> Date : {day}/{month}/{year}</p>
    }

    const [todos, setTodos] = useState([])

    // add a new task
    const addTask = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTasks = [todo, ...todos]
        setTodos(newTasks);
    };

    //edit a task
    const updateTask = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // complete a task
    const completeTask = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    // remove a task
    const removeTask = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };
    
    return (
        <div>
            <h1>Today's tasks</h1>
            <h2><DateTime></DateTime></h2>
            <TodoForm onSubmit={addTask}/>
            <Todo 
            todos={todos}
            completeTodo={completeTask}
            removeTodo={removeTask}
            updateTodo={updateTask}
            />
        </div>
    );
}

export default TodoList
