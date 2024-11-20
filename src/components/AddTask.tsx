import React, { useState } from 'react';
import { useDispatch } from '../redux/store';
import { addTask } from '../redux/taskSlice';
 

const AddTask = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (title.trim()){
            dispatch(addTask(title.trim()));
            setTitle('');
        }
    };
    return(
        <div className="add-task">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};
export default AddTask;