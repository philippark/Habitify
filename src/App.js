import logo from './logo.svg';
import './App.css';
import Box from './Box.js'
import BoxList from './BoxList.js'
import {useState, useEffect} from 'react'

function App() {
  const colors = ["#008000", "#32de84", "#90EE90", "#98FB98"];
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
      <Box boxColor = {boxColor} clickHandle = {clickHandle}/>
    </div>
  );
}

export default App;
