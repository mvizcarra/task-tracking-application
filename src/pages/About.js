

function AboutPage() {
    return (
        <div className="grid h-full place-items-center">
            <div className="border-2 p-10 rounded shadow w-2/3">
                
                <div className="text-xl text-center pb-5">
                    Welcome to <span className="text-3xl tracking-tighter font-[Verdana] font-bold text-[#598392]">task tracker</span>
                </div>

                <div className="">
                    This is a simple web application designed to help you manage your everyday tasks from tidying up your room, 
                    getting your daily exercise, to getting in some LeetCode practice!<br/><br/>
                    On your screen you will see four sections: <strong>Backlog</strong>, <strong>Today's Tasks</strong>, 
                    <strong> In Progress</strong>, and <strong>Completed</strong>. If you've ever used a Scrum Task Board or Jira, 
                    this layout should look somewhat familiar.<br /><br />
                    To get started, in the upper right hand corner your backlog section you will see 
                    
                        <button className="border rounded inline-block hover:bg-blue-500 hover:text-white ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    
                    <br />Use this button to create a new task! Simply enter in the name of your task and a longer description if needed.<br/><br/>
                    A task will have two or three buttons depending if the task has been completed or not.<br/><br/>
                </div>


                <div className="flex my-2">
                    <button className="rounded text-blue-500 hover:bg-blue-500 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                    </button>

                    <div className="ml-3">This button will expand your task to reveal your given description</div>
                </div>

                <div className="flex my-2">
                    <button className="rounded text-green-500 hover:bg-green-500 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg>
                    </button>
                    <div className="ml-3">This button will move your task to the next section <br/>Backlog -{'>'} Today's Tasks -{'>'} In Progress -{'>'} Completed</div>
                </div>

                <div className="flex my-2">
                    <button className="rounded text-red-500 hover:bg-red-500 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    <div className="ml-3">This is a simple trash button that will delete your task</div>
                </div>

                <div className="text-lg text-center mt-4">
                    Now you're all set! Go get working!
                </div>

                
            
            </div>
        </div>
    );
}

export default AboutPage;