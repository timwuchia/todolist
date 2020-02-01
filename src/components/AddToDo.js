import React, { useState } from 'react';

const AddToDO = () => {
    const [listData, setListData] = useState({
        title:'',
        description: ''
    });

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

    const onSubmit = () => {
        console.log(listData)
    }

    const { title, description } = listData
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
                        />
                    </div>
                    <div className='form-group'>
                        <textarea 
                            className='form-control' 
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={onChangeDescription}
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddToDO;
