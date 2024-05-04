import React from "react";
import Canvas from "../Canvas/testcanvas";
import Participants from "../Participants/Participants";
//import Canvas from '../Canvas/canvas'

const Board = () => {
  return (
    <div className="w-screen h-screen flex justify-around align-center p-2">
      <Canvas />
      <Participants />
    </div>
  );
};

export default Board;
