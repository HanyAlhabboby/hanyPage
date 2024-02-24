import React, { useState } from 'react';
import '../App.css';
import image from '../Images/Travel.jpg'

function Funny() {
    const [inputValue, setInputValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Förhindra standardformulärskickning
        if (inputValue === '1337') {
            setShowModal(true);
        } else {
            setErrorMessage('Felaktig kod! testa med 1337');
        }
    };

    return (
        <div className='funny'>
            <p>Hej, du har en chans att gissa på fyrsiffrig kod och vinna en resa! Lycka till</p>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Skriv in magiska koden"
                /><br />

                <button type="submit">Enter</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {showModal && (

                <div className="modal">
                    <p>Grattis! Du har vunnit en resa till Cypern! 🎉</p>
                    <button onClick={() => setShowModal(false)}>Stäng</button>

                </div>


            )}


            <br /><img src={image} className='img-funny' alt='bild på resa'></img>
        </div>
    );
}

export default Funny;