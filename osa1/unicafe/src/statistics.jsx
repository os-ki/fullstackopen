import React from "react"
 
const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback
  
  const getReviewCount = () => good + neutral + bad
  

  const getAverage = () => {
    const total = getReviewCount()
    return total ? (feedback.good - feedback.bad) / total : 0
  }

  const getPositivePercent = () => ((feedback.good / getReviewCount()) * 100)

  return (
    <div className='statistics'>
      <h2>Statistics</h2>
     
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
       
      <p>all: {getReviewCount()}</p>
      <p>average: {getAverage()}</p>
      <p>positive: {getPositivePercent()}%</p>
    </div>
  )
}
 
export default Statistics