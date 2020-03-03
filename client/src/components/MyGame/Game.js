import React from 'react';
import GameWindow from './GameWindow';



const Game =()=>{
    return(
        <section id="game">
    <div className="game-frame">
        <GameWindow />
      <div id="unityContainer" style={{width:"auto", height:"500px", position:"relative",zIndex:"3"}} onClick={console.log("click game")}></div>
    </div>
    <a id="download" href="empty">download here...</a>
    </section>
    )
}

export default Game;