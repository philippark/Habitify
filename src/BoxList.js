const BoxList = ({boxes, colors}) => {

    
    return ( 
        <div className = "BoxList">
            {boxes.map((box)=>(
                
                <div className = "Box" style = {{backgroundColor:colors[box.value]}}> 
                    <p>{box.value}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BoxList;