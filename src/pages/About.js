import React, { useState } from 'react';
import image from '../Images/videogames.jpg'
export default function About() {

    const [color, setColor] = useState("") //startfärgen
    const changeBackgroundColor = () => {
        const myColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = myColor;

    };
    return (


        <div class="about">

            <div>

                <div className="App" style={{ backgroundColor: color }}>
                    <header onClick={changeBackgroundColor}>
                        <h1>Om Mig</h1>

                    </header>
                </div>
            </div>


            <p> På min fritid så tycker jag om att titta på fotboll och spela tv-spel
                Jag hade en sida på över 100 000 personer på Facebook där vi diskuterar allt som har med Real Madrid att göra.
                Nyligen har jag skapat en grupp på över 1000 personer också på Facebook där är det enklare att dela saker med varandra och prata djupare om fotbollsmatcher.
                När det kommer till TV-spel så är det bland det bästa jag vet när man vill rymma på en utflykt från sin vardag.

            </p>

            <img src={image} alt="bild på spel" className='img-about' />




        </div>


    );
}