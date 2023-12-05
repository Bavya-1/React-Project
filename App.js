//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

  
 
      
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    window.alert("Message sent");
    
  }

  return (
    <>
    <h1>CHIT CHAT</h1>
     <div className="f">
     
  <label>
    Eliz&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp; 
    <button onClick={handleSubmit}>Send</button>
  </label>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <label>
    Maddy&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp; 
    <button onClick={handleSubmit}>Send</button>
  </label>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <label>
    Cal&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp; 
    <button onClick={handleSubmit}>Send</button>
  </label>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <label>
    Hariet&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp; 
    <button onClick={handleSubmit}>Send</button>
  </label>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <label>
    Walt&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp; 
    <button onClick={handleSubmit}>Send</button>
  </label>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <label>
    Wake&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp; 
    <button onClick={handleSubmit}>Send</button>
  </label>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  

    </div> 
    </>
    );
}


export default App;
