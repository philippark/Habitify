import logo from './logo.svg';
import './App.css';
import Box from './Box.js'
import BoxList from './BoxList.js'
import {useState, useEffect} from 'react'

function App() {
  const colors = ["#4B6F44", "#32de84", "#4FFFB0"];
  let [index, setIndex] = useState(0);

  const [boxColor, setboxColor] = useState(colors[index]);

  const clickHandle = ()=>{
    setIndex(index += 1);
    setboxColor(colors[index]);

  }

  useEffect(()=>{
    console.log(index);
  })

  return (
    <div className="App">
      <button onClick={clickHandle}>Change color</button>
      <Box boxColor = {boxColor}/>
    </div>
  );
}

export default App;
