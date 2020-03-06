import React from 'react';

const About =()=>{
return( 
    <section id="about">
    <div className="info text">
    <h2>Game and Project Infos</h2>
    <p>&#60;A Text Adventure in which a Website will be created by you.
The idea is to answer the question:
How do I build a website?
Starting to code can be overwhelming with different syntaxes in HTML,CSS or Javascript. This game shall be your guide to building a website and show you that it is not so complicated...at least when there aren’t any bugs./></p>
<p>&#60;In most text adventures, as you probably know, text will guide you through the game and the scenery is developed in your imagination. In WebDevSim you also start with a blank website, but it will be filled with content, as you write the text and code your way  through./></p>
<p>&#60;We would like to give you an introduction to basic coding to create your first website. Enjoy the game and share your website creation with us and others. Spread the word about WebDevSim! /></p>
    </div>
    <div className="dennis-box">
    <p className="text">
    <div className="Dennis"></div>
    <h2>Dennis Dabergotz</h2>
    <ul>
        <li>Game Development</li>
    </ul>
    <br></br>
    <br></br>
  {/* <p>&#60;Responsible for the game development and project structure.
The idea came up when I was introduced to Terminal. I could gain skills and work with Terminal when I was introduced to Termina. A text adventure where you use Terminal commands to navigate through the game. The concept of Termina inspired me to create WebDevSim./></p> */}

  </p>
    </div>
    <div className="katrin-box">
    <p className="text">
    <div className="Katrin"></div>
    <h2>Katrin Salac</h2>
    <ul>
        <li>Web Development</li>
        <li>UI Design</li>
    </ul>
    <br></br>
    <br></br>
  {/* <p>&#60;Responsible for the game development and project structure.
The idea came up when I was introduced to Terminal. I could gain skills and work with Terminal when I was introduced to Termina. This is a text adventure where you use Terminal commands to navigate through the game. The concept of Termina inspired me to create WebDevSim./></p> */}
    </p>
    </div>
    </section>
    )
}
 
export default About;