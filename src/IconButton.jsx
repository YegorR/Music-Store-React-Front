import React from 'react';

import './IconButton.css';

function IconButton(props) {
    return (
        <input className="Button" type="image" src={props.image} alt="Пикча не загрузилась("/>
    );
}

export default IconButton;