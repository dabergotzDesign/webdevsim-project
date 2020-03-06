import React,{useEffect} from 'react';

const Game =()=>{
    const script = document.createElement('script');

        useEffect(() => {
            script.innerText = 'UnityLoader.instantiate("unityContainer", "Build/WebDevSim_webgl.json")';
            script.async = true;
            document.body.appendChild(script);
            return () => {
              document.body.removeChild(script);
            }
          });

    return(
        <section id="game">
    <div className="game-frame">
      <div id="unityContainer" /> 
    </div>
    <a id="download" href="https://dabergotzdesign.itch.io/webdevsim" target="_blank" rel="noopener noreferrer">download here...</a> 
    </section>
    )
}

export default Game;