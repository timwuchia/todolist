import React from 'react';
import { Link } from 'react-router-dom';
import './ToDo.css'

const ToDoList = () => {
    
    const todolist = JSON.parse(localStorage.getItem('todolist'));
    
    const deleteItem = (id) => {
        const newToDoList = todolist.filter(item => item.id !== id);
        localStorage.setItem('todolist',JSON.stringify(newToDoList));
    }

    return (
        <div className='mt-5'>
            <h1 className='text-center mb-4'>My To Do List</h1>
            <div className='todolist-wrapper container'>
                {todolist.length > 0 && todolist ?
                    (todolist.map(item => (
                            <div key={item.id} className='card p-3 mb-3'>
                                <div className='item-title d-flex flex-wrap justify-content-between'>
                                    <h3 className='mb-2'>{item.title}</h3>
                                    <div className='mb-2'>
                                        <Link className="btn btn-primary mr-3" to={`/todolist/edit/${item.id}`}>Edit</Link>
                                        <Link onClick={() =>deleteItem(item.id)} className="btn btn-secondary" to="#">Delete</Link>
                                    </div>
                                </div>
                                <p>{item.description}</p>
                            </div>
                    )))
                    :
                    (<div>Nothing on the list, <Link to='/addtodo'>add</Link> something to do?</div>)
                }
            </div>
        </div>
    );
}

export default ToDoList;
