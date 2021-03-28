import React, { useState } from "react";
import Anecdote from "./anecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const vote = () => {
    const arr = [...votes];
    arr[selected] += 1;
    setVotes(arr);
  };

  const mostvotedIndex = votes.indexOf(Math.max.apply(null, votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <button
        onClick={() => {
          setSelected(Math.floor(Math.random() * anecdotes.length));
        }}
      >
        Next anecdote
      </button>
      <br />
      <Anecdote
        votes={votes[selected]}
        text={anecdotes[selected]}
        vote={vote}
      />
      <hr />
      <div>
        <h2>Anecdote with most votes</h2>
        {votes[mostvotedIndex] > 0 && (
          <Anecdote
            votes={votes[mostvotedIndex]}
            text={anecdotes[mostvotedIndex]}
            vote={vote}
            voteDisabled
          />
        )}
      </div>
    </div>
  );
};

export default App;
