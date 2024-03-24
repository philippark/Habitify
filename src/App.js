import logo from './logo.svg';
import './App.css';
import Box from './Box.js'
import BoxList from './BoxList.js'
import {useState} from 'react'

function App() {
  const [boxColor, setboxColor] = useState("green");

  const clickHandle = ()=>{
    setboxColor("red");
    console.log(boxColor);
  }

  return (
    <div className="App">
      <button onClick={clickHandle}>Change color</button>
      <Box boxColor = {boxColor}/>
    </div>
  );
}

export default App;
