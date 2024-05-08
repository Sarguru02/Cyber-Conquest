import React from "react";
import Canvas from "../Canvas/testcanvas";
import AsidePanel from "../AsidePanel/AsidePanel";
//import Canvas from '../Canvas/canvas'

const Board = () => {
  return (
    <div className="w-screen h-screen flex justify-around align-center p-2">
      <Canvas />
      <AsidePanel />
    </div>
  );
};

export default Board;
