import React from 'react';
import cvDisplayJson from '../Cvjson.json';

const CvDisplay = () => {
    return (
        <div>
            <div className='eduction-experience-container'>
                <h2>Mina utbildningar</h2>
                {cvDisplayJson.eduction.map((eduction) => (
                    <div className="eduction-experience-item" key={eduction.id}>
                        <h3>{eduction.school}</h3>
                        <p>Ämne : {eduction.subject}</p>
                        <p>År :{eduction.year}</p>


                    </div>
                ))}
            </div>
            <div className='eduction-experience-container'>
                <h2>Mina erfarenheter</h2>
                {cvDisplayJson.experience.map((experience) => (
                    <div className="eduction-experience-item" key={experience.id}>
                        <h3>{experience.company}</h3>
                        <p>Titel: {experience.titel}</p>
                        <p>Datum :{experience.date}</p>


                    </div>
                ))}
            </div>
        </div>

    );
};

export default CvDisplay