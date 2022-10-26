import React from 'react';

const CardProfessor = (props) => {
    return (
        <div style={{
            border: 'solid 1px orange', margin: '5px', backgroundColor: 'silver'
        }}>
            <h3>Card de Professor</h3>
            <h5>{props.nome}, {props.area}</h5>
        </div>
    )
}

export default CardProfessor;

// https://node-express-mock-jwt-cors.herokuapp.com/professor/aberto/todos 