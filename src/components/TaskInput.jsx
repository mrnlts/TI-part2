import { useState } from "react";

export default function TaskInput({addTask}) {
    const [taskName, setTaskName] = useState("");
    const handleChange = (e) => setTaskName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskName)
        setTaskName("")
    }
    return (
        <form className="taskForm" onSubmit={handleSubmit}>
            <label>Insert the name of your new task</label>
            <input type="text" onChange={handleChange} value={taskName} required placeholder="Do the dishes"/>
            <button type="submit">Add new task</button>
        </form>
    )
}