import {Link} from 'react-router-dom';


function MainNavigation(){
    return (

        <header className='items-center'>
            <nav className="flex items-center justify-between bg-white px-40 py-2 shadow border-b-2 h-14">
                
                <div className="text-2xl tracking-tighter font-[Verdana] font-bold flex text-[#598392]">task tracker</div>
                <ul className="flex mr-6 mt-2 items-center">
                    <li className="flex mr-6">
                        <Link  to='/' className="no-underline  text-lg hover:text-[#778DA9] text-gray-700  ">Home</Link>
                    </li>
                    <li className="flex mr-6">
                        <Link to='/about' className="no-underline text-gray-700 hover:text-[#778DA9] text-lg ">About</Link>
                    </li>
                </ul>
                
            </nav>

        </header>
    );
}

export default MainNavigation;