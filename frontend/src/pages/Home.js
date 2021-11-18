import React   from 'react';
import '../styles/components/pages/Home.css';

const Home = (props) => {
    return (
        <div id="contenedor">
            <section>
            <div className="ani01">¡Bienvenidos a mi esquina en la web!</div>  

            <p>
            Para todo aquel que disfruta viajar como yo, éste es un lugar para compartir tips, fotos y todo lo
            relacionado con
            el hermoso hobby de viajar por el mundo!<br /><br />

            Pasá adelante y viajá por las distintas secciones...
            </p>

            </section>
            <aside>
            <figure>
            <blockquote class="blockquote"> 
                <p>El mundo es un libro, y quienes no viajan leen sólo una página.</p>
            </blockquote>
                 <figcaption class="blockquote-footer text-end">  
                      <cite title="Source Title">San Agustín</cite>  
                   </figcaption>
            </figure>
            </aside>

        </div>
    )
}

export default Home;