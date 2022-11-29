import axiosInstance from "../../axios";

function RevertButton(props){

    function revertHandler(){
        console.log("revert handler hit", props.id, props.status)

        var sendTo = props.status;

        if(props.status === 'completed'){
            sendTo = 'progress';
        } else if (props.status === 'progress'){
            sendTo = 'today';
        } else if (props.status === 'today'){
            sendTo = 'backlog';
        }
        
        axiosInstance.put(`/tasks/${props.id}.json`, {...props.task, status: sendTo}).then((response) => {console.log(response)});

        props.onChange();
    }

    return (
        
        <button onClick={revertHandler} className="rounded text-green-500 hover:bg-green-500 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
        </button>

    )
}

export default RevertButton;