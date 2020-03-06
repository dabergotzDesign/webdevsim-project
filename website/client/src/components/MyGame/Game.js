import React,{useEffect} from 'react';

const Game =()=>{
  const script = document.createElement('script');
  
  // useEffect(() => {
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // });
  const startGame=()=>{
    script.innerText = 'UnityLoader.instantiate("unityContainer", "Build/WebDevSim_webgl.json")';
    script.async = true;
            document.body.appendChild(script);
          }

    return(
        <section id="game">
    <div className="game-frame">
      <div id="unityContainer">
    <button id="startButton" onClick={startGame}>Start</button> 
      </div>
    </div>
    {/* <button id="download"  onClick={quitGame}>Quit</button>  */}
    <a id="download" href="https://dabergotzdesign.itch.io/webdevsim" target="_blank" rel="noopener noreferrer">download here...</a> 
    </section>
    )
}

export default Game;