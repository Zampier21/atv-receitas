import{useState, useEffect} from 'react';
import './AdicionarReceitas.css';
import React, { Component } from 'react';
import axios from "axios";


export default function AddReceitas(){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      console.log("clicado");
      axios.post('/data.json', { data: inputValue })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };

    return (
        <div className="NomeReceita">

            <label for="receitas">Sua Receita</label>
            <input id="receitas"type="text" placeholder="Qual o nome da receita" name="Sua-Receita" onChange={handleInputChange}></input>
            <label for="ingredientes">ingredientes aqui</label>
            <textarea id="ingredientes" name="ingredientes" placeholder='Digite aqui os ingredientes'onChange={handleInputChange}></textarea>
            <label for="Forma">Modo de Preparo</label>
            <textarea id="Forma" name="Forma" placeholder='Digite aqui o modo de preparo'onChange={handleInputChange}></textarea>
            <button onClick={handleButtonClick}>Enviar</button>
        </div>
    )
}