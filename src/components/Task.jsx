export default function Task({ name, status, id, removeTask, updateTaskStatus }) {
    return (
        <tr className="taskContainer">
            <td>{name}</td>
            <td> {status}</td>
           <td> <button className="statusBtn" onClick={() => updateTaskStatus(id)}>Mark as {status === "pending" ? "finished" : "pending" }</button></td>
            <td><button onClick={()=>removeTask(id)}>Remove</button></td>
        </tr>
    )
}