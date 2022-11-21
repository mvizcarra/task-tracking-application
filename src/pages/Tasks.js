
import TaskList from '../components/TaskList';

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
        }
    ]



    return ( 
    
    <div className="h-full pt-2 text-center px-20">
            {/* <span className='mt-10 text-xl font-semibold'>Tasks</span> */}
            
            <div className='grid grid-cols-3 h-[60%] mt-4'>
                <div className="border rounded text-center m-2 bg-white shadow overflow-auto">Today's Tasks</div>
                <div className="border rounded text-center m-2 bg-white shadow overflow-auto">In Progress</div>
                <div className="border rounded text-center m-2 bg-white shadow overflow-auto">Completed</div>
            </div>
            <div className='grid-cols-1 h-[30%]'>
                <div className="border rounded h-full m-2 bg-white shadow overflow-auto">
                    <text>Backlog</text>
                    <TaskList tasks={DUMMY_DATA} />
                </div>
            </div>
            
        
        


        {/* <Container className="border h-screen">
            <Row className="h-3/5" >
                <Col className="border rounded text-center">Today's Tasks</Col>
                <Col className="border rounded text-center">In Progress</Col>
                <Col className="border rounded text-center">Completed</Col>
            </Row>
            <Row className="h-2/5">
                <Col className="border rounded text-center">Backlog</Col>
            </Row>
        </Container> */}
    </div>
    
    );
}

export default TasksPage;