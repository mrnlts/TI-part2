import { useState } from "react"
import TaskInput from "../components/TaskInput";
import Task from "../components/Task";
import tasksTest from '../data.json';

export default function ToDoList() {
    const [tasks, setTasks] = useState(tasksTest);
    const handleRemoveTask = (id) => {
        const updated = [...tasks].filter(task => task.id !== id);
        setTasks(updated)
    }
    const handleNewTask = (name) => {
        const updated = [...tasks]
        updated.push({
            name, status: "pending", id: tasks[tasks.length-1].id +1
        })
        setTasks(updated)
    }
    const handleTaskStatus = (id) => {
        const updated = tasks.map(task => {
            if (task.id === id) {
                task.status = task.status === "pending" ? "finished" : "pending"
            }
            return task;
        });
        setTasks(updated)
    }
    return (
        <div className="toDoListViewContainer">
            <TaskInput addTask={handleNewTask} />
            <table className="tableContainer">
                <tr>
                    <th className="tableHeadings">
                        <td>Name</td>
                        <td>Status</td>
                        <td></td>
                        <td></td>
                    </th>
                </tr>
            {tasks.map((task, i) => <Task name={task.name} status={task.status} key={task.id} id={task.id} removeTask={handleRemoveTask} updateTaskStatus={handleTaskStatus} />
            )}
            </table>
        </div>
    )
}