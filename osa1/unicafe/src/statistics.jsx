import React from "react"
import StatisticLine from './statisticLine'
 
const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback

  const getReviewCount = () => good + neutral + bad
  
  const getAverage = () => {
    const total = getReviewCount()
    return total ? (feedback.good - feedback.bad) / total : 0
  }

  const getPositivePercent = () => ((feedback.good / getReviewCount()) * 100)

  const renderFields = () => (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={getReviewCount()} />
        <StatisticLine text="average" value={getAverage()} />
        <StatisticLine text="positive" value={`${getPositivePercent()}%`} />
      </tbody>
    </table>
  )

  return (
    <div className='statistics'>
      <h2>Statistics</h2>
      {getReviewCount() > 0 ? renderFields() : <p>No feedback given</p>}
    </div>
  )
}
 
export default Statistics