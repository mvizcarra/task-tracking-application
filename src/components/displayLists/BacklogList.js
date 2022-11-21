import BacklogItem from "./BacklogItem";

function BacklogList(props) {

    function openDeleteModalHandler(task) {
        props.openDeleteModal(task);
    }

    return (
        <ul className="flex flex-wrap flex-row px-2">
            {props.tasks.map( (task) => (
                <BacklogItem key={task.id} id={task.id} name={task.name} description={task.description} status={task.status} openDeleteModal={openDeleteModalHandler}/>
            ))}
        </ul>
    );
}

export default BacklogList;