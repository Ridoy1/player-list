import React from 'react';

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
            <button onClick={() => handleAddPlayer(props.player)}>Add Player</button>

        </div>
    );
};

export default Player;