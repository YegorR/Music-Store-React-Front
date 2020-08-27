import React from 'react';
import IconButton from '../IconButton';

import './Player.css';
import randomImg from './svg/random.svg';
import previousImg from './svg/prev.svg';
import playImg from './svg/play.svg';
import nextImg from './svg/next.svg';
import albumImg from './svg/album.svg';
import repeatImg from './svg/repeat.svg';

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "Player">
                <div className="LeftPart">
                    <img className="AlbumImage" src={albumImg} alt="Пикча не загрузилась("></img>
                </div>
                <div className="CenterPart">
                    <div className="ButtonPanel">
                        <IconButton image={randomImg}></IconButton>
                        <IconButton image={previousImg}></IconButton>
                        <IconButton image={playImg}></IconButton>
                        <IconButton image={nextImg}></IconButton>
                        <IconButton image={repeatImg}></IconButton>
                    </div>
                    <div className="StripPanel">
                        <TimeMark seconds={100}></TimeMark>
                        <progress max="100" value="30"></progress>
                        <TimeMark seconds={110}></TimeMark>
                    </div>
                    
                </div>
                <div className="RightPart"></div>
             </div>
        );
    }
}

function TimeMark(props) {
    function div(val, by){
        return (val - val % by) / by;
    }

    let allSeconds = props.seconds;
    let seconds = allSeconds % 60;
    let minutes = div(allSeconds, 60);
    if (seconds === 0) 
        seconds = "00";
    else if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let mark = minutes + ":" + seconds;

    return (
        <div className="TextMark">{mark}</div>
    );
}

export default Player;