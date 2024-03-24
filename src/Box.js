import {useState} from 'react'

const Box = ({boxColor}) => {

    return ( 
        <div className = "Box" style = {{backgroundColor:boxColor}}>
        </div>
     );
}
 
export default Box;