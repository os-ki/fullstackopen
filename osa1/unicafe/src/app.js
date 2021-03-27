import React, {useState} from "react";
import Button from "./button";
import Statistics from "./statistics";


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const updateFeedback = (review) => () => {
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
            <Button key={key} onClick={updateFeedback(key)}>{key}</Button>
          ))
        }
      </div>
       <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
