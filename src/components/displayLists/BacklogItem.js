import { useState } from "react";

function BacklogItem(props) {

    const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

    function forwardHandler(){
        console.log("forward handler hit", props.id);
        props.forwardId(props);
    }

    function deleteButtonHandler(){
        console.log("trash handler hit", props.id)
        props.openDeleteModal(props);
    }

    function openHandler(){
        setDescriptionIsOpen(!descriptionIsOpen);
        console.log("open handler hit", props.description) 
    }

    return (
        <li className={` ${descriptionIsOpen ? "w-full flex order-first justify-center" : "w-1/3 flex flex-row flex-wrap"}`}>
            
            <div className={`${descriptionIsOpen ? "w-2/5 justify-center mx-20" : "w-full"} border-2 border-gray-200 hover:border-gray-300 hover:font-semibold rounded m-1  px-10 items-center bg-white`}>
                    
                <div className="flex justify-between items-center">
                            
                            <text className="p-2">{props.name}</text>
                            
                            <div className="flex">
                                <button onClick={openHandler} className="rounded text-blue-500 hover:bg-blue-500 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </button>
                                <button onClick={forwardHandler} className="rounded text-green-500 hover:bg-green-500 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                                    </svg>
                                </button>
                                <button onClick={deleteButtonHandler} className="rounded text-red-500 hover:bg-red-500 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>

                </div>

                {descriptionIsOpen ? (
                    <div className="border-top text-center py-4">{props.description ? props.description: "no additional description"}</div>
                ) : null}

            </div>
        </li>
    );
}

export default BacklogItem;