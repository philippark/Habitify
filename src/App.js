import logo from './logo.svg';
import './App.css';
import Box from './Box.js'
import BoxList from './BoxList.js'
import {useState, useEffect} from 'react'

function App() {
  const colors = ["#008000", "#32de84", "#90EE90", "#98FB98"];

  const [boxes, setBoxes] = useState([
    {id:0, value:0},
    {id:1, value:1},
    {id:2, value:2}
  ]);

  /*
  let [index, setIndex] = useState(0);

  const [boxColor, setboxColor] = useState(colors[index]);

  const clickHandle = ()=>{
    setIndex(index += 1);
    setboxColor(colors[index]);

  }

  useEffect(()=>{
    console.log(index);
  })
  */

  const changeColor = () => {
    console.log(boxes[boxes.length-1].value)
    boxes[boxes.length-1].value += 1;
  }

  return (
    <div className="App">
      <BoxList boxes = {boxes} colors = {colors} />
      {/*
      <Box boxColor = {boxColor} />
      <Box boxColor = {boxColor}/>
      <button onClick = {clickHandle}>Change Color</button>
  */}

    <button onClick = {changeColor}>Change</button>
    </div>
  );
}

export default App;
