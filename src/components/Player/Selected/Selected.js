import React from 'react';

const Selected = (props) => {
    const selected = props.selected;
    console.log(props);
    const totalPlayer = selected.reduce((sum, player) => sum + player.salary, 0);
     
    return (
        <div>
            <h2>This is cart: {selected.map(selected => <Selected selected={selected}></Selected>)}</h2>
            <p>Total Salary: {totalPlayer}</p>
        </div>
    );
};

export default Selected;