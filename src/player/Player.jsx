import React from 'react';

import './Player.css';
import randomImg from './svg/random.svg';
import previousImg from './svg/prev.svg';
import playImg from './svg/play.svg';
import nextImg from './svg/next.svg';

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "Player">
                <IconButton image={randomImg}></IconButton>
                <IconButton image={previousImg}></IconButton>
                <IconButton image={playImg}></IconButton>
                <IconButton image={nextImg}></IconButton>
                {/* <button>Повторять</button> */}
             </div>
        );
    }
}


function IconButton(props) {
    return (
        <input className="Button" type="image" src={props.image} alt="Пикча не загрузилась("/>
    );
}

export default Player;