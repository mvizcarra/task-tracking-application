import MainNavigation from "./MainNavigation";

function Layout(props){
    return (
        
        <div className="h-screen flex flex-col bg-white">
            <MainNavigation  className=""/>
            <div className="h-screen">
            {props.children}
            </div>
        </div>
        
    );
}

export default Layout;