import { React } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './home.css';
import bolo_carne_bacon from '../../assets/Imagens/bolo_carne_bacon.jpg';
import bolo_cenoura from '../../assets/Imagens/bolo-cenoura.png';
import file_frango from '../../assets/Imagens/file_frango.jpg';
import torta_bis from '../../assets/Imagens/torta-bis.jpg';

export default function Home() {
    const [jsonData, setjsonData] = useState([]);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + `/data.json`)
            .then(response => response.json())
            .then(data => {
                setjsonData(data);
            })
            .catch(error => console.error(error));
    }, []);

    // Função para remover espaços em branco e substituí-los por hífens
    const formatNameForURL = (name) => {
        return name.replace(/\s+/g, '-');
    };

    const imagens = [
        bolo_carne_bacon,
        file_frango,
        bolo_cenoura,
        torta_bis]

    return (
        <div className="row">
            <div className="column col-6">
                {jsonData && jsonData.map(receita => (
                    <div className="container" key={receita.nome}>
                        <Link className="linkInvisivel" to={`/DetalhesReceitas/${formatNameForURL(receita.nome)}`}>
                            <div className='card'>
                                <div id={receita.nome}>
                                    <h2 className='ver'>{receita.nome}</h2>
                                    <img src={imagens[receita.id - 1]} alt="Bolo de carne de bacon"></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}