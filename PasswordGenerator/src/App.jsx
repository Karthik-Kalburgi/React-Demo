import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [length , setlength] = useState(8);
const [numberAllowed , setnumberAllowed] = useState(false);
const [ characterAllowed , setcharacterAllowed] = useState(false);
const [password,setpassword] = useState("");
const passwordGenerator =useCallback(()=>{
  let pass = '';
  let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(numberAllowed){
    str += "1234567890";
  }
  if(characterAllowed){
    str +='!@#$%^&*()_+:"{}?></*-';
  }
  for(let i=1;i<=length ; i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char);

  }
  setpassword(pass);
}, [length,numberAllowed,characterAllowed,setpassword])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
  <>
  <h1 className='text-4xl text-center text-white'> Password Generator</h1>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
test
<div className='flex shadow rounded-lg overflow-hidden mb-4 '>
  <input type="text"
  value={password}
  className='outline-none w-full  py-1 px-3 '
  placeholder='password'
  readOnly
  
  />
  <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>

</div>
<div className='flex text-sm gap-x-2 '>
  <div className='flex items-center gap-x-1 '>
    <input type="range" 
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setlength(e.target.value)}}
    />
    <label> Length : {length} </label>
    </div> 
    <div className='flex items-center gap-x-1 '>
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setnumberAllowed((prev)=> !prev);
      }}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1 '>
      <input type="checkbox"
      defaultChecked={characterAllowed}
      id='numberInput'
      onChange={()=>{ 
        setcharacterAllowed((prev)=> !prev);
      }}
      />
      <label htmlFor="numberInput">character</label>
    </div>

</div>
  </div>
  </>
  )
}

export default App
