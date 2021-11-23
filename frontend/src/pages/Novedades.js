import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/Novedades.css';

const Novedades = (props) => {

    const [loading, setloading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setloading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setloading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <div id="contenedor">
            <section>
                <h2>Novedades</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key ={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )}
            </section>
            <aside>
                <figure>
                    <blockquote className="blockquote">
                        <p>Quizás viajar no sea suficiente para prevenir la intolerancia, pero si logra demostrarnos que
                            todas las personas lloran, ríen, comen, se preocupan y mueren, puede entonces introducir la idea
                            de que si tratamos de entendernos los unos a los otros, quizás hasta nos hagamos amigos.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">
                        <cite title="Source Title">Maya Angelou</cite>
                    </figcaption>
                </figure>
            </aside>

        </div>
    )
}

export default Novedades;