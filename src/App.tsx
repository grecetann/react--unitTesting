import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './components/Forms/InputComponent/InputComponent';

function App() {
  return (
    <div className="App">
         <InputComponent label="username" name="username" changeHandler={(e)=>console.log(e.target.value)} className="username"/>
      <InputComponent label="password" name="password" changeHandler={(e)=>console.log(e.target.value)} className="password"/>
   
    </div>
  );
}

export default App;
