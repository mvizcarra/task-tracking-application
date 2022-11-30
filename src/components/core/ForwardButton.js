import axiosInstance from "../../axios";

function ForwardButton(props){

    function forwardHandler(){
        console.log("forward handler hit");

        var sendTo = props.status;

        if(props.status === 'backlog'){
            sendTo = 'today';
        } else if (props.status === 'today'){
            sendTo = 'progress';
        } else if (props.status === 'progress'){
            sendTo = 'completed';
        }
        
        axiosInstance.put(`/tasks/${props.id}.json`, {...props.task, status: sendTo}).then((response) => {console.log(response)});

        props.onChange();
    }

    return (
        <button onClick={forwardHandler} className="rounded text-green-500 hover:bg-green-500 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
            </svg>
        </button>
    )
}

export default ForwardButton;