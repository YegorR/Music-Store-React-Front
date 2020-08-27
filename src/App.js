import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';

import Player from './player/Player';

import favicon from './favicon.png';

function App() {
    return ( 

    <div className = "App" >
        <Helmet>
            <title>YegorR Music Store</title>
            <link rel="icon" href={favicon}/>
        </Helmet>
        <Sidebar></Sidebar>
        <Main></Main>
        <Player></Player>
    </div>
    );
}


function Main() {
    return ( <div className = "Main"> Главная панель </div>
    )
}


function Sidebar() {
    return (<div className = "Sidebar"> Боковая панель </div>
    )
}

export default App;