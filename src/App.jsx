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
const inputIsValid = userInput.duration>0
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
    {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
    {inputIsValid && <Result userInput={userInput}></Result>}
    
    </>
  )
}

export default App
