import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProfessor from './CardProfessor';

const ListaProfessores = () => {

    const [professores, setProfessores] = useState([{nome: 'Nome1', area: 'Area1'}]);

    useEffect( () => {
        buscarProfessores();
    }, []);

    const buscarProfessores = async () => {
        try {
            //const url = 'https://node-express-mock-jwt-cors.herokuapp.com/professor/todos';
            const url2 = 'https://node-express-mock-jwt-cors.herokuapp.com/professor/aberto/todos';
            const professoresPesquisados = await axios.get(url2);
            //console.log(professoresPesquisados.data);
            if (professoresPesquisados.data) {
                setProfessores(professoresPesquisados.data);
        }
        } catch (error) {
            console.log('Erro durante a requisição');
        }
        
    }

    return (
        <div style={{border: 'solid 2px green'}}>
            <h2>Lista de Professores:</h2>
            {professores.map( (professorAtual) => {
                return (
                    <CardProfessor nome={professorAtual.nome} area={professorAtual.area} key={professorAtual.nome} />
                );
            })}
        </div>
    )
}

export default ListaProfessores;