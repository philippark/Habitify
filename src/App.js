import logo from './logo.svg';
import './App.css';
import Box from './Box.js'
import BoxList from './BoxList.js'
import {useState, useEffect} from 'react'
import Home from "./Home.js"
import Navbar from "./Navbar.js"

function App() {
  //const colors = ["#ebedf0","#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const colors = ["#ebedf0","#40c463"];

  const [boxes, setBoxes] = useState(
    [
    [
      {id:1, value:0},
      {id:2, value:1},
      {id:3, value:1},
      {id:4, value:1},
      {id:5, value:0},
      {id:6, value:0},
      {id:7, value:1}
    ]
]
);

  const changeColor = () => {
    /*
    let copy = boxes[boxes.length-1];
    if (copy.value < colors.length-1){
      copy.value += 1;
    }

    let newBoxes = boxes.filter(box => box.id !== boxes.length);
    newBoxes.push(copy);

    setBoxes(newBoxes);
    */
  }

  return (
    <div className="App">
      <Navbar/>
      <div className = "content">
        <Home/>
      </div>
      <BoxList boxes = {boxes} colors = {colors} />
      {/*
      <Box boxColor = {boxColor} />
      <Box boxColor = {boxColor}/>
      <button onClick = {clickHandle}>Change Color</button>
  */}

    <button onClick = {changeColor}>Change</button>


    <div className="Box"></div>
    <div className="Box Box--active"></div>
    </div>
  );
}

export default App;
