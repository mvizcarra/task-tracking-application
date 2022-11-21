import axiosInstance from "../../axios";

function DeleteModal(props){

    function onCancelHandler(){
        props.onCancel();
    }

    function onConfirmHandler(){
        console.log(props.task)

        axiosInstance.delete(`/tasks/${props.task.id}.json`).then((response) => {console.log(response)});

        props.onConfirm();

    }

    return (
        <div className="grid place-items-center text-black h-[90%]">
            <div className="block rounded-lg border-2 p-4 bg-white">
                <div className="block px-2 py-4 text-lg">Are you sure you want to delete this task?</div>
                <div className="mb-2">
                    <div className=" mx-2">Name</div>
                    <div className="block p-1 m-1 border rounded w-full text-left mx-2">{props.task.name}</div>
                    <div className="mx-2">Description</div>
                    <text className="block p-1 mx-1 mt-1 mb-3 border rounded w-full text-left mx-2">{props.task.description}</text>
                </div>
                <button onClick={onCancelHandler} className="inline-block p-2 m-2 border rounded border-red-700 text-red-500 hover:bg-red-500 hover:text-white">Cancel</button>
                <button onClick={onConfirmHandler} className="inline-block p-2 m-2 border rounded border-gray-700 text-gray-700 hover:border-white hover:bg-blue-500 hover:text-white">Confirm</button>
            </div>
        </div>
    )
}

export default DeleteModal;