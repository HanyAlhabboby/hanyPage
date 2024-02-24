import React from 'react';
import myImage from "../Images/me.png"

function Home() {
    return (
        <div className="home">

            <h1>Välkommen till Hany Alhabbobys hemsida</h1>
            <img src={myImage} className='img-home' alt="Bild på Mig" />
            <p>Här kan du lära känna mig på annorlunda sätt genom att bläddra på olika menyn och läsa mer om mig</p>


        </div>
    );
}
export default Home