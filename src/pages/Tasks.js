
import TaskList from '../components/TaskList';
import BacklogList from '../components/BacklogList';

function TasksPage(){

    const DUMMY_DATA = [
        {
            id: 1,
            name: "practice data structures",
            description: "solve leetcode question on data structures",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "backlog"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "completed"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "completed"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "progress"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "progress"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "today"
        },
        {
            id: 2,
            name: "practice algorithims",
            description: "solve leetcode question on algorithms",
            status: "today"
        }
    ]

    const BACKLOG_TASKS = [];
    const TODAYS_TASKS = [];
    const PROGRESS_TASKS = [];
    const COMPLETED_TASKS = [];

    function sortTasks(tasks) { 
        
        tasks.map( (task) =>  {

            if(task.status === "backlog") {
                BACKLOG_TASKS.push(task);
            } else if (task.status === "today"){
                TODAYS_TASKS.push(task);
            } else if (task.status === "progress"){
                PROGRESS_TASKS.push(task);
            } else if (task.status === "completed"){
                COMPLETED_TASKS.push(task);
            }

            return null;
        })
    }

    sortTasks(DUMMY_DATA);



    return ( 
    
    <div className="h-full pt-2 text-center px-20">
            {/* <span className='mt-10 text-xl font-semibold'>Tasks</span> */}
            
            <div className='grid grid-cols-3 h-[60%] mt-4'>
                <div className="border rounded text-center m-2 bg-white shadow overflow-auto">
                    <text>Today's Tasks</text>
                    <TaskList tasks={TODAYS_TASKS} />
                </div>
                <div className="border rounded text-center m-2 bg-white shadow overflow-auto">
                    <text>In Progress</text>
                    <TaskList tasks={PROGRESS_TASKS} />
                </div>
                <div className="border rounded text-center m-2 bg-white shadow overflow-auto">
                    <text>Completed</text>
                    <TaskList tasks={COMPLETED_TASKS} />
                </div>
            </div>
            <div className='grid-cols-1 h-[30%]'>
                <div className="border rounded h-full m-2 bg-white shadow overflow-auto">
                    <div className='relative mb-2'>
                        <text className=''>Backlog</text>
                        <button className="absolute right-2 m-1 border rounded hover:bg-[#778DA9] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <BacklogList tasks={BACKLOG_TASKS}/>
                </div>
            </div>
            
    </div>
    
    );
}

export default TasksPage;