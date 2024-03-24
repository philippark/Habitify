import {useState} from 'react'

const Box = ({boxColor, clickHandle}) => {

    return ( 
        <div className = "Box" style = {{backgroundColor:boxColor}}>
            <button onClick={clickHandle}>Change</button>
        </div>
     );
}
 
export default Box;