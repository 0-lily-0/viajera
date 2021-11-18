import React  from 'react';
import '../styles/components/pages/Galeria.css';
import Carousel from 'react-bootstrap/Carousel';


const Galeria = (props) => {
    return (
        <div id="contenedor">
            <section>
                <h2>Algunas fotos de mis viajes</h2>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto01.jpg"
                            alt="Prisión de Alcatraz, San Francisco, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Prisión de Alcatraz</h3>
                            <span>San Francisco, Estados Unidos.</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto02.jpg"
                            alt="Parque Nacional Yosemite, California, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Parque Nacional Yosemite</h3>
                            <span>California, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto03.jpg"
                            alt="Gran Cañón del Colorado, Arizona, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Gran Cañón del Colorado</h3>
                            <span>Arizona, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto04.jpg"
                            alt="Stonehenge, Wiltshire, Inglaterra"
                        />
                        <Carousel.Caption>
                            <h3>Stonehenge</h3>
                            <span>Wiltshire, Inglaterra</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto05.jpg"
                            alt="Bath Markets, Bath, Inglaterra"
                        />
                        <Carousel.Caption>
                            <h3>Bath Markets</h3>
                            <span>Bath, Inglaterra</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto06.jpg"
                            alt="Tower Bridge, Londres, Inglaterra"
                        />
                        <Carousel.Caption>
                            <h3>Tower Bridge</h3>
                            <span>Londres, Inglaterra</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto07.jpg"
                            alt="Castillo de Edinburgo, Edinburgo, Escocia"
                        />
                        <Carousel.Caption>
                            <h3>Castillo de Edinburgo</h3>
                            <span>Edinburgo, Escocia</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto08.jpg"
                            alt="Vista desde el Castillo de Edinburgo, Edinburgo, Escocia"
                        />
                        <Carousel.Caption>
                            <h3>Vista desde el Castillo de Edinburgo</h3>
                            <span>Edinburgo, Escocia</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto09.jpg"
                            alt="Hermosa vista, Callander, Escocia"
                        />
                        <Carousel.Caption>
                            <h3>Hermosa vista</h3>
                            <span>Callander, Escocia</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto10.jpg"
                            alt="Lago Ness, Escocia"
                        />
                        <Carousel.Caption>
                            <h3>Paseo por el lago</h3>
                            <span>Lago Ness, Escocia</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto11.jpg"
                            alt="Meridiano de Greenwich, un pie en cada hemisferio, Royal Observatory Greenwich, Londres, Inglaterra"
                        />
                        <Carousel.Caption>
                            <h3>Meridiano de Greenwich, un pie en cada hemisferio</h3>
                            <span>Royal Observatory Greenwich, Londres, Inglaterra</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto12.jpg"
                            alt="Puente de Brooklyn, Nueva York, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Puente de Brooklyn</h3>
                            <span>Nueva York, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto13.jpg"
                            alt="Estatua de la Libertad, Nueva York, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Estatua de la Libertad</h3>
                            <span>Nueva York, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item>                                  
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto14.jpg"
                            alt="Hudson Yards, Nueva York, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Hudson Yards</h3>
                            <span>Nueva York, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto15.jpg"
                            alt="Coney Island, Nueva York, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Coney Island</h3>
                            <span>Nueva York, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item>                      
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/foto16.jpg"
                            alt="Coney Island, Nueva York, Estados Unidos"
                        />
                        <Carousel.Caption>
                            <h3>Coney Island</h3>
                            <span>Nueva York, Estados Unidos</span>
                        </Carousel.Caption>
                    </Carousel.Item>  
                </Carousel>


            </section>

            <aside>
            <figure>
                <blockquote className="blockquote">  
                    <p>Un viaje se vive 3 veces: cuando lo soñamos, cuando lo vivimos y cuando lo recordamos.</p>
                </blockquote>
                <figcaption className="blockquote-footer text-end">  
                    <cite title="Source Title">Anónimo</cite>  
                </figcaption>
            </figure>
            </aside>  

        </div>
    )
}

export default Galeria;