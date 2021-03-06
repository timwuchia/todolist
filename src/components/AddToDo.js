import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';

const AddToDO = (props) => {

    const generatedID = uuidv4();

    const [listData, setListData] = useState({
        id:generatedID,
        title:'',
        description: ''
    });

    const { id ,title, description } = listData;

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
        if(localStorage.getItem('todolist')===null){
            console.log('to do list does not exist now!');
            let todolist = []
            localStorage.setItem('todolist', JSON.stringify(todolist) );
        }

        var todolist = [];
        todolist = JSON.parse(localStorage.getItem('todolist'));
        todolist.push(listData)
        console.log(todolist);
        localStorage.setItem('todolist',JSON.stringify(todolist));
        props.history.push('/todolist');
    }

    return(
        <div className='container mt-5'>
            <div className='card p-3'>
                <h1 className="text-center mb-3">Add A Thing To Do</h1>
                <form onSubmit={onSubmit} >
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
                    <input className="btn btn-primary" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default AddToDO;
