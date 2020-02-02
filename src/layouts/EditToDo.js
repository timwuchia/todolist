import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const EditToDo = (props) => {

    const localStorageToDoList = JSON.parse(localStorage.getItem('todolist'));
    const currentItem = localStorageToDoList.find(item => item.id === props.match.params.id);

    const [listData, setListData] = useState({
        id: currentItem.id,
        title:currentItem.title,
        description: currentItem.description,
    });
    const { title, description } = listData;
    const onChangeTitle = (e) => {
        setListData({
            ...listData,
            title: e.target.value
        })
    }
    const onChangeDescription = (e) => {
        setListData({
            ...listData,
            description: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const updatedData = listData
        const todolist = JSON.parse(localStorage.getItem('todolist'));
        for (var i in todolist) {
            if( todolist[i].id === props.match.params.id){
                todolist[i] =updatedData;
                break;
            }
        }
        localStorage.setItem('todolist',JSON.stringify(todolist));
        props.history.push('/todolist');
    }
    
    return(
        <div className='container mt-5'>
            <div className='card p-3'>
                <h1 className="text-center mb-3">Edit</h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className='form-control'
                            name='title' 
                            placeholder='Title'
                            value={title}
                            onChange={onChangeTitle}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <textarea 
                            className='form-control' 
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={onChangeDescription}
                            required
                        >
                        </textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update" />
                </form>
            </div>
        </div>
    )
}

export default EditToDo
