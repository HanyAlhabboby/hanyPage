import React, { useState, useEffect } from 'react';
import image from '../Images/experience.jpg'
import '../App.css';
import Loader from '../components/Loader';

export default function Projects() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Initialt är loading false

    useEffect(() => {
        fetch('https://api.github.com/users/HanyAlhabboby/repos')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setTimeout(() => {
                    setLoading(false)
                }, 3000);
            })
            .catch(error => console.error('Kunde inte läsa data', error));
    }, []);




    /*const handleButtonClick = () => {
        setLoading(true); // Visa loading screen när användaren trycker på knappen
        // Simulera en laddningstid (t.ex. 3 sekunder)
        setTimeout(() => {



            setLoading(false); //Dölj loading screen när laddningen är klar
            // Navigera användaren till den nya webbsidan här
        }, 3000);






    } */


    if (loading) {
        return (<div><Loader /></div>

        )

    }

    return (
        <div className='container'>
            {posts.map(post => (
                <div className='card-container' key={post.id}>
                    <img className='card-img'
                        src={image}
                        alt="bild på erfarenhet">
                    </img>
                    <h3 className='card-titel'>Projekt namn: {post.name}</h3>
                    <p className='card-desc'>Språk:{post.language}</p>
                    <a href={post.html_url} target="_blank" rel="noopener noreferrer">
                        <button className='card-btn'>Länk till projektet</button>


                    </a>
                </div >

            ))}



        </div>
    );
}