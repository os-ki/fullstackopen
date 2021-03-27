import React, {useState} from "react";


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const addToReview = (review) => () => {
    setFeedback({
      ...feedback,
      [review]: feedback[review] + 1
    })
  }

  const getReviewCount = () => (
    Object.values(feedback)
          .reduce((a, c) => a + c)
  )

  const getAverage = () => {
    const total = getReviewCount()
    return total ? (feedback.good - feedback.bad) / total : 0
  }

  const getPositivePercent = () => ((feedback.good / getReviewCount()) * 100)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        {
          Object.keys(feedback).map(key => (
            <button key={key} onClick={addToReview(key)}>{key}</button>
          ))
        }
      </div>
      <div>
        <h2>Statistics</h2>
        {Object.entries(feedback).map(([key, value]) => (
          <p key={key}>{key}: {value}</p>
        ))}
        <hr />
        <p>all: {getReviewCount()}</p>
        <p>average: {getAverage()}</p>
        {getReviewCount() > 0 && <p>positive: {getPositivePercent()}%</p>}
      </div>
    </div>
  );
};

export default App;
