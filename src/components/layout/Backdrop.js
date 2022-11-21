

function Backdrop(props){
    return <div className="absolute inset-0 h-full justify-center backdrop-blur-sm">{props.children}</div>
}

export default Backdrop;