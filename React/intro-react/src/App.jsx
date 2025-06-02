import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
//Useeffect, dependency array,cleanups
function App() {
  const[count,setcount]=useState(0);
  function increase(){
    setcount(count+1);
  }
  return<div>
    <Counter count={count}/>
    <button onClick={increase}>Increase Count</button>
  </div>
}
//mounting,re-rendring,unmounting
function Counter(props){
  useEffect(function(){
    console.log("Mount");
  
    return function(){
      console.log("Unmount");
    }
  },[props.count]);

  useEffect(function(){
    console.log("count has changed");
  },[props.count])

  return <div>
    counter {props.count}
  </div>
}

export default App
