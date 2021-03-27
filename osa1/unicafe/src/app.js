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
      </div>
    </div>
  );
};

export default App;
