import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const {name, salary, img} = props.player;
    const imgStyle = {height: '200px'}
    const playerStyle = {
        border: '2px solid red',
        margin: '10px 100px 10px 100px',
        padding: '20px'
    }
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={playerStyle}>

            <h4>Player Name: {name}</h4>
            <img style={imgStyle} src={img} alt=""/>
            <p>Salary: {salary}</p>
            {/* <button onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />  Add Player</button> */}
            <Button variant="warning" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> Add Player</Button>
        </div>
    );
};

export default Player;