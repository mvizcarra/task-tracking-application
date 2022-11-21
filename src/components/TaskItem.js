

function TaskItem(props) {
    return (
        <li className="flex flex-row flex-wrap w-full ">
            <div className="border rounded m-1 w-full" >
                <p>{props.name}</p>
            </div>
        </li>
    );
}

export default TaskItem;