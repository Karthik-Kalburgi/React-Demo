import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setcounter] = useState(16)

  const addValue = ()=>{
      console.log("Clicked" , counter);
      counter = counter + 1;
    let addans =   setcounter(counter)
    addans
      
  }
  const removeValue =()=>{
  setcounter(counter - 1);
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2> Counter : {counter} </h2>
      <button onClick={addValue} >Add Value</button>
      <br></br>
      <button  onClick={removeValue} >Remove Value {counter} </button>
      <footer>
        <p>{counter}</p>
      </footer>
    </>
  );
}

export default App;
