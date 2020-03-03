import React from 'react';
import Unity,{UnityContent} from 'react-unity-webgl';

let unityContent = new UnityContent(
    "../../../public/Build.json",
    "../../../public/Build/UnityLoader.js", {
      unityVersion: "2019.1.5",
      adjustOnWindowResize:true
    }
  );
const GameWindow = () => {
        return <Unity unityContent={unityContent} style={{backgroundColor:"green", zIndex:"5",position:"relative"}} />
    }

export default GameWindow;