import { React } from 'react';
import { useEffect, useState } from 'react';
import './DetalhesReceitas.css';

export default function DetalhesReceitas(nomeParametro) {
    const [jsonData, setjsonData] = useState(null);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + `/data.json`)
            .then(response => response.json())
            .then(data => {
                console.log(nomeParametro);
                // Encontrar o objeto no JSON com base no nome do parâmetro
                const receitaEncontrada = data.find(receita => receita.nome === nomeParametro);
                if (receitaEncontrada) {
                    setjsonData(receitaEncontrada);
                } else {
                    // Caso não seja encontrada uma receita com o nome especificado
                    console.error(`Receita com nome "${nomeParametro}" não encontrada.`);
                }
            })
            .catch(error => console.error(error));
    }, [nomeParametro]);

    if (!jsonData) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="column">
            <h2>{jsonData.nome}</h2>
            {jsonData.topicos.map(linha => (
                <div key={linha.id}>
                    <h3>{linha.Titulo}</h3>
                    <p>{linha.conteudo}</p>
                </div>
            ))}
        </div>
    );
}