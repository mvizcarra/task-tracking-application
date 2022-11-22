import TaskItem from "./TaskItem";

function TaskList(props) {

    function forwardIdHandler(task){
        props.forwardId(task)
    }

    function openDeleteModalHandler(task) {
        props.openDeleteModal(task);
    }

    return (
        <ul className="flex flex-wrap flex-row px-2 mb-0 mt-1">
            {props.tasks.map( (task) => (
                <TaskItem key={task.id} id={task.id} name={task.name} description={task.description} status={task.status} openDeleteModal={openDeleteModalHandler} forwardId={forwardIdHandler}/> 
            ))}
        </ul>
    );
}

export default TaskList;