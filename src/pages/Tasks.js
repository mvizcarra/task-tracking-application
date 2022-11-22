import { useState, useEffect } from "react";
import NewTaskModal from "../components/crudOperations/NewTaskModal";
import TaskList from '../components/displayLists/TaskList';
import BacklogList from '../components/displayLists/BacklogList';
import axiosInstance from "../axios";
import Backdrop from "../components/layout/Backdrop";
import DeleteModal from "../components/crudOperations/DeleteModal";

function TasksPage(){

    // const DUMMY_DATA = [
    //     {
    //         id: 1,
    //         name: "practice data structures",
    //         description: "solve leetcode question on data structures",
    //         status: "backlog"
    //     },
    //     {
    //         id: 2,
    //         name: "practice algorithims",
    //         description: "solve leetcode question on algorithms",
    //         status: "completed"
    //     },
    //     {
    //         id: 3,
    //         name: "practice algorithims",
    //         description: "solve leetcode question on algorithms",
    //         status: "progress"
    //     },
    //     {
    //         id: 4,
    //         name: "practice algorithims",
    //         description: "solve leetcode question on algorithms",
    //         status: "today"
    //     }
    // ]

    //const [isLoading, setIsLoading] = useState(true);
    const [loadedTasks, setLoadedTasks] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [changeConfirmed, setChangeConfirmed] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

    const [currentTask, setCurrentTask] = useState({});


    const BACKLOG_TASKS = [];
    const TODAYS_TASKS = [];
    const PROGRESS_TASKS = [];
    const COMPLETED_TASKS = [];

    function openModalHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    function confirmChangeHandler(){
        console.log("confirm change handler has been hit")
        closeModalHandler();
        closeDeleteModalHandler();
        setCurrentTask({});
        setChangeConfirmed(true);
    }

    function openDeleteModalHandler(task){
        console.log("open delete modal handler successfully passed up", task);
        //currTask = task;
        setDeleteModalIsOpen(true);
        setCurrentTask(task);
        console.log(currentTask);
    }

    function closeDeleteModalHandler(){
        setDeleteModalIsOpen(false);
    }

    function forwardIdHandler(task){
        console.log("forward props succesful", task);

        var sendTo = task.status;

        if(task.status === 'backlog'){
            sendTo = 'today';
        } else if (task.status === 'today'){
            sendTo = 'progress';
        } else if (task.status === 'progress'){
            sendTo = 'completed';
        }
        
        axiosInstance.put(`/tasks/${task.id}.json`, {...task, status: sendTo}).then((response) => {console.log(response)});

        setChangeConfirmed(true);
    }



    useEffect(() => {
        //setIsLoading(true);
        axiosInstance.get('/tasks.json')
          .then((response) => {
            const tasks = [];
    
            for (const key in response.data) {
              const task = {
                id: key,
                ...response.data[key]
              };
    
              tasks.push(task);
            }

            console.log("rendered change", changeConfirmed);
    
            //setIsLoading(false);
            setLoadedTasks(tasks);
            setChangeConfirmed(false);
          });
      }, [changeConfirmed]);
    
    //   if (isLoading) {
    //     return (
    //       <section>
    //         <p>Loading...</p>
    //       </section>
    //     );
    //   }

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

    sortTasks(loadedTasks);
    // sortTasks(DUMMY_DATA);



    return ( 
    

    
    <div className="h-full pt-2 text-center px-20 relative"> 

         
            
                <div className='grid grid-cols-3 h-[60%] mt-4'>
                    <div className="border rounded text-center m-2 bg-white shadow overflow-auto">
                        <div className='sticky top-0 mb-2 bg-white'>
                            <text>Today's Tasks</text>
                        </div>
                        <div className="h-[90%] bg-gray-100 rounded mt-2 mx-2 overflow-auto pb-0">
                             <TaskList tasks={TODAYS_TASKS} openDeleteModal={openDeleteModalHandler} forwardId={forwardIdHandler}/>
                        </div>
                    </div>
                    <div className="border rounded text-center m-2 bg-white shadow overflow-auto">
                        <div className='sticky top-0 mb-2 bg-white'>
                            <text>In Progress</text>
                        </div>
                        <div className="h-[90%] bg-gray-100 rounded mt-2 mx-2 overflow-auto pb-0">
                            <TaskList tasks={PROGRESS_TASKS} openDeleteModal={openDeleteModalHandler} forwardId={forwardIdHandler}/>
                        </div>
                    </div>
                    <div className="border rounded text-center m-2 bg-white shadow">
                        <div className='sticky top-0 mb-2 bg-white'>
                            <text>Completed</text>
                        </div>
                        <div className="h-[90%] bg-gray-100 rounded mt-2 mx-2 overflow-auto pb-0">
                            <TaskList tasks={COMPLETED_TASKS} openDeleteModal={openDeleteModalHandler} forwardId={forwardIdHandler}/>
                        </div>
                    </div>
                </div>
                <div className='grid-cols-1 h-[30%]'>
                    <div className="border rounded h-full m-2 bg-white shadow overflow-auto">
                        <div className='sticky top-0 mb-1 bg-white'>
                            <text className=''>Backlog</text>
                            <button className="absolute right-2 m-1 border rounded hover:bg-blue-500 hover:text-white" onClick={openModalHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>


                            </button>
                        </div>
                        <div className="h-[80%] bg-gray-100 rounded mt-2 mx-2 overflow-auto pb-0">
                        <BacklogList tasks={BACKLOG_TASKS} openDeleteModal={openDeleteModalHandler} forwardId={forwardIdHandler}/>
                        </div>
                    </div>
                    
                </div>

                {modalIsOpen ? <NewTaskModal onCancel={closeModalHandler} onConfirm={confirmChangeHandler} /> : null}
                {deleteModalIsOpen && (<Backdrop><DeleteModal task={currentTask} onCancel={closeDeleteModalHandler} onConfirm={confirmChangeHandler}/></Backdrop>) }
            
    </div>
    
    );
}


export default TasksPage;