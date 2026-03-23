import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName) {
            onAddTask(taskName);
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Add a new task" 
                required 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
