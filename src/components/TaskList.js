import TaskItem from "./TaskItem";

function TaskList(props) {
    return (
        <ul className="flex flex-wrap flex-row w-full px-2">
            {props.tasks.map( (task) => (
                <TaskItem key={task.id} id={task.id} name={task.name} description={task.description} status={task.status}/>
            ))}
        </ul>
    );
}

export default TaskList;