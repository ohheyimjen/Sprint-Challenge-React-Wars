import React from 'react';


class Aliens extends React.Component {
    constructor() {
        super();
        this.state = {starwarsChars: []};
    }

render() {
    return (
        <div>
            <h1 className='title'>Star Wars Characters:</h1>
            <img src={'./components/storm-trooper.jpg'} alt='Storm Trooper' />

           
        </div>
    );
};

};



export default Aliens;