import BacklogItem from "./BacklogItem";

function BacklogList(props) {

    function openDeleteModalHandler(task) {
        props.openDeleteModal(task);
    }

    function confirmChangeHandler(){
        props.onChange();
    }

    return (
        <ul className="flex flex-wrap flex-row px-2 mb-0 mt-1">
            {props.tasks.map( (task) => (
                <BacklogItem key={task.id} id={task.id} task={task} name={task.name} description={task.description} status={task.status} openDeleteModal={openDeleteModalHandler} onChange={confirmChangeHandler}/>
            ))}
        </ul>
    );
}

export default BacklogList;