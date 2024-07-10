import React from 'react'
import { calculateInvestmentResults } from '../util/investment';

export default function Result({userInput}) {
  const result = calculateInvestmentResults(userInput);
  console.log(result)
  return (    
    <div>
      Res...
    </div>
  )
}
