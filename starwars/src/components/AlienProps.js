import React from 'react';

function AlienProps(props) {
    return (
        <div className='dossier'>
            <div className='alien-info'>
                <h3>{props.starwarsChars.name}</h3>
                <p>
                    <strong>gender:</strong> {props.starwarsChars.gender}
                </p>
                <p>
                    <strong>starships:</strong> {props.starwarsChars.starships}
                </p>
                <p>
                    <strong>homeworld:</strong> {props.starwarsChars.homeworld}
                </p>
            </div>

        </div>
    );
}

export default AlienProps;