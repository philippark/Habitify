const BoxList = ({boxes, colors}) => {
    return(
     <div>
        {boxes.map((col)=>(
            <div className = "Col">
            {col.map((box) => (
                <div className = "Box" style = {{backgroundColor:colors[box.value]}} > 
                    <p id ="val" class = "center">{box.value}</p>
                </div>
            )
            )
            }
            </div>
        ))}
     </div>
    );
}
 
export default BoxList;