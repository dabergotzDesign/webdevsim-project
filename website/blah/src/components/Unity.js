import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
 
const unityContent = new UnityContent(
  "MyGame/Build.json",
  "MyGame/UnityLoader.js"
);
 
const App = () => {
  return <Unity unityContent={unityContent} />;
}