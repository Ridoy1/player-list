import React from 'react';

const Selected = (props) => {
    const selected = props.selected;
    console.log(props);
    const totalPlayer = selected.reduce((sum, player) => sum + player.salary, 0);
     
    return (
        <div>
            {
                selected.map(select => <p>{select.name} <span>Salary: {select.salary}</span></p>)
            }
            <p></p>
            <p>Total Salary: {totalPlayer}</p>
        </div>
    );
};

export default Selected;