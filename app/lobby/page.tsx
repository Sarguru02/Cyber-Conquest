import React from "react";
import "./lobby.css";

const Lobby = () => {
  return (
    <div className="lobby">
      <div className="lobby-foreground">
        <span>WELCOME TO CYBER CONQUEST</span>
        <div className="lobby-code">
          <input
            type="text"
            name="lobbyCode"
            id="lobbyCode"
            title="Game Code"
            placeholder="Enter Game Code"
          />
          <div className="begin-btn">Begin</div>
        </div>
      </div>
      <div className="lobby-background"></div>
    </div>
  );
};

export default Lobby;
