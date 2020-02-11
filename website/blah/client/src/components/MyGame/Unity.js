import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
 
const unityContent = new UnityContent(
  "Build/StartMenü.json",
  "Build/UnityLoader.js"
);
 
const GameWindow = () => {
  return <Unity unityContent={unityContent} />;
}

export default GameWindow;