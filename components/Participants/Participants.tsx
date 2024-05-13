import React from "react";

const Participants = () => {
  const participantsArr = [
    {
      name: "Participant 1",
      balance: 4000,
    },
  ];
  return (
    <div className="participants-list">
      {participantsArr.map((ele, ind) => {
        return (
          <div className="part-li">
            <div className="part-name">{ele.name}</div>
            <div className="part-balance">{ele.balance}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Participants;
