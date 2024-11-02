import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Button  from './Button'
import Header from './Header'
import List  from './List'
function App() {
  const fruits =["Mangoes","Apple","Orange"];
  const clickMessage =()=>{
    alert("Button clicked.");
    console.log("Button clicked");
  }
  return (
    
   <>
      <Person name="Tushar" age="23"/>
      <Button text="Click me" onClick={clickMessage} />
      <Header title="This a title by component ."/>
      <List items={fruits}/>
   </>
  )
}

export default App;
