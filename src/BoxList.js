const BoxList = ({boxes}) => {
    return ( 
        <div className = "BoxList">
            {boxes.map((box)=>(
                <div className = "Box">
                </div>
            ))}
        </div>
     );
}
 
export default BoxList;