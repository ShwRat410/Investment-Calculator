import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import React, {useState } from 'react';


function App() {

  const[userInput,setUserInput]=useState({
    initialInvestment:12000,
    annualInvestment:1000,
    expectedReturn:6,
    duration:12
});
function onHandleChange(inputIdentifier,newValue){
  setUserInput((prevUserInput)=>{
      return{
      ...prevUserInput,
      [inputIdentifier]:+newValue,
      }
})}
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={onHandleChange}></UserInput>
    <Result userInput={userInput}></Result>
    </>
  )
}

export default App
