import React from 'react';

function Character(props) {
    return (
        <div className='dossier'>
            <div className='alien-info'>
                <h3>{props.character.name}</h3>
                <p>
                    <strong>gender:</strong> {props.character.gender}
                </p>
                <p>
                    <strong>birth year:</strong> {props.character.birth_year}
                </p>
                <p>
                    <strong>homeworld:</strong> {props.character.homeworld}
                </p>
            </div>

        </div>
    );
}

export default Character;