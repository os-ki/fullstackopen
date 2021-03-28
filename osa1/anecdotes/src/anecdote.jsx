import React from "react";

const Anecdote = ({ vote, text, votes, voteDisabled }) => {
  return (
    <div className="anecdote">
      <p>{text}</p>
      <p>Votes: {votes}</p>
      {!voteDisabled && <button onClick={vote}>👍</button>}
    </div>
  );
};

export default Anecdote;
