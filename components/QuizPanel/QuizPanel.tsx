import React from "react";

const QuizPanel = () => {
  return (
    <div className="quiz-panel-wrapper">
      <div className="quiz-panel">
        <div className="quiz-header">
          <div className="quiz-catergory">Catergory</div>
          <div className="quiz-timer">{/* TODO: Timer component */}</div>
          <div className="quiz-score">10</div>
        </div>
        <div className="quiz-qn">{/* TODO: Image or Inner HTML format */}</div>
        <div className="quiz-answer">
          {/* Can be textual, mcq, msq, image included, admin controlled scoring (no inputs from player) */}
        </div>
        <div className="quiz-footer">
          {/* Quiz id, Question id in small font */}
        </div>
      </div>
      {/* TODO: Add a back panel to reveal the correct answers */}
    </div>
  );
};

export default QuizPanel;
