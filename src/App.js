import logo from './logo.svg';
import './App.css';
import Box from './Box.js'
import BoxList from './BoxList.js'
import {useState, useEffect} from 'react'

function App() {
  const colors = ["#ebedf0","#9be9a8", "#40c463", "#30a14e", "#216e39"];

  const [boxes, setBoxes] = useState([
    {id:1, value:4},
    {id:2, value:3},
    {id:3, value:2},
    {id:4, value:1},
    {id:5, value:0}
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
    let copy = boxes[boxes.length-1];
    if (copy.value < colors.length-1){
      copy.value += 1;
    }

    let newBoxes = boxes.filter(box => box.id !== boxes.length);
    newBoxes.push(copy);

    setBoxes(newBoxes);
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
