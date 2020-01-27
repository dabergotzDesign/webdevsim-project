import React from 'react';
import GameWindow from "../components/MyGame/Unity";

const Game =()=>{
return(
    <section className="game">
    <div className="game-frame">
        <GameWindow/>
    </div>
    <a id="download" href="empty">download here...</a>
    </section>
    )
}
 
export default Game;