import { useRef } from "react";
import axiosInstance from "../../axios";

function NewTaskModal(props){

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();

    function onCancelHandler(){
        props.onCancel();
    }

    function onConfirmlHandler(event){
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const TASK_DATA = {
            name: enteredName,
            description: enteredDescription,
            status: "backlog"
        }

        
        console.log(TASK_DATA);

        axiosInstance.post('/tasks.json', TASK_DATA)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          props.onConfirm();
    }
 
    return (
        <div className="backdrop-blur-sm mt-4 px-2 justify-center absolute inset-0">
            <form className="inline-block border rounded bg-white shadow text-left p-4 mt-2 w-[40%] " onSubmit={onConfirmlHandler}>

                <text className="text-xl p-3">Create New Task</text>
                <div className="mt-2 p-2">
                    <label className="p-2 block " htmlFor='name'>Name</label>
                    <input className="p-2 border rounded-xl " type='text' id='name' required placeholder="Enter Task Name" ref={nameInputRef}/>
                </div>
                <div className="p-2">
                    <label className="p-2 block " htmlFor='description'>Description</label>
                    <textarea className="p-2 border w-[90%] rounded-xl" rows='2' id='description' placeholder="Enter Task Description" ref={descriptionInputRef}/>
                </div>
                <div className="p-2">
                    <button className="border rounded border-red-700 text-red-500 hover:bg-red-500 hover:text-white p-2 m-2" onClick={onCancelHandler}>Cancel</button>
                    <button className="border rounded border-gray-700 text-gray-700 hover:border-white hover:bg-blue-500 hover:text-white p-2 m-2">Confirm</button>
                </div>
            </form>
        </div>
    );
}

export default NewTaskModal;