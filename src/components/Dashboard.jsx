import React from 'react';

const Dashboard = () => {
    // Sample task statistics data
    const stats = {
        totalTasks: 100,
        completedTasks: 75,
        pendingTasks: 25,
    };

    return (
        <div className="dashboard">
            <h1>Task Statistics</h1>
            <p>Total Tasks: {stats.totalTasks}</p>
            <p>Completed Tasks: {stats.completedTasks}</p>
            <p>Pending Tasks: {stats.pendingTasks}</p>
        </div>
    );
};

export default Dashboard;