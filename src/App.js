import React, {useState ,useEffect } from 'react';

import './App.css';

function App() {
  const[joke,setJoke]=useState("please wait....")
  const newjoke = ()=>{
    fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe"
    ).then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      setJoke(res2.value.joke)
    })

  }
  useEffect(()=>{
    
newjoke()
  },[])
  return (
    <div className="App">
      <h1 >live,love, laugh with joke...</h1>
      <h4>{joke}</h4>
      <button className="head" onClick={()=>newjoke()}>Click for new one!</button>

      
    </div>
  );
}

export default App;
