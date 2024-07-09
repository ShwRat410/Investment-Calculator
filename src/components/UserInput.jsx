import React, {useState } from 'react';

export default function UserInput() {
    const[userInput,setUserInput]=useState({
        initialInvestment:1000,
        annualInvestment:15000,
        expectedReturn:140,
        duration:6
    });
    function onHandleChange(inputIdentifier,newValue){
        setUserInput((prevUserInput)=>{
            return{
            ...prevUserInput,
            [inputIdentifier]:newValue,
            }
    })}
    
    return (
      <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type='number'
                required
                value={userInput.initialInvestment}
                onChange={(event)=>onHandleChange('initialInvestment',event.target.value)}
                ></input>
            </p>
            <p>
                <label>Annual investment</label>
                <input type='number'
                required
                value={userInput.annualInvestment}
                onChange={(event)=>onHandleChange('annualInvestment',event.target.value)}></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type='number'
                required
                value={userInput.expectedReturn}
                onChange={(event)=>onHandleChange('expectedReturn',event.target.value)}
                ></input>
            </p>
            <p>
                <label>Duration</label>
                <input type='number'
                required
                value={userInput.duration}
                onChange={(event)=>onHandleChange('duration',event.target.value)}
                ></input>
            </p>
        </div>
      </section>
    )
}
