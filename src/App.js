import React from 'react';
import './App.css';

import Player from './player/Player';

function App() {
    return ( 

    <div className = "App" >
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