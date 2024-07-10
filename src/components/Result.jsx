import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({userInput}) {
  const result = calculateInvestmentResults(userInput);
  console.log(result)
  const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
  return (    
    <div>
      <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest(year)</th>
                <th>Total interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map(yearData => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear-totalInterest;
            return(
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
            )})}
        </tbody>
      </table>
    </div>
  )
}
