import React from 'react';
import '../styles/components/pages/Tips.css';
import Accordion from 'react-bootstrap/Accordion';


const Tips = (props) => {
    return (
        <div id="contenedor">
            <section>
                <span className="efectotituloseccion">Tips</span><br /><br />
                    <p>Hasta no hace tantos años, para planificar un viaje, averiguar posibles destinos, itinerarios, contratar excursiones y todo lo que implica un viaje, se recurría casi indefectiblemente a una agencia de viajes.<br /><br />

                    Sin embargo, a medida que internet fue creciendo, comenzaron a surgir alternativas online. Con el correr de los años, el nivel de maduración llegó a tal punto que, al menos desde hace una década, es posible diseñar nuestras vacaciones en su totalidad, eligiendo por nosotros mismos el o los destinos, cómo llegar a cada uno de ellos, en dónde hospedarse, qué hacer en cada lugar. Todo al más mínimo detalle. <br /><br />
                    </p>

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><strong>¿Cuándo y a dónde?</strong></Accordion.Header>
                            <Accordion.Body>
                                    Creo que el cuándo y a dónde vamos van de la mano. A veces ya tenemos definido el lugar, porque es un país o ciudad que siempre quisimos visitar y, por una u otra razón, no pudimos hacerlo hasta el momento. Otras veces no tenemos definido el lugar pero sí la época del año en la que vamos a viajar, ya sea porque solamente podemos tomarnos vacaciones laborales en determinados meses del año u otros factores. <br /><br />
                                    También es importante el clima del destino y, desde el punto de  vista económico, si va a ser temporada alta, normal o baja.<br /><br />
                                    Al que no piense que el clima es importante, lo invito a ir a Nueva York en lo peor del invierno boreal. Aunque seas fanático del frío, muchas excursiones no se realizan durante los meses de invierno.
                                    </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><strong>¿Cómo?</strong></Accordion.Header>
                            <Accordion.Body>
                                Cómo llegamos al destino dependerá obviamente de la distancia a la que se encuentra de nuestro lugar de residencia. Y sí, a veces elegimos el destino en función de la oferta de pasajes aéreos. <br /><br />

                                Hoy en día ya sea a través de diferentes portales especializados o de los websites de las propias compañías de transporte, podemos adquirir los pasajes sin problema alguno.<br /><br />

                                Algo a tener en cuenta es que a veces podemos llegar a un país en avión, y luego movernos dentro del mismo con vehículos de alquiler o con trenes/autobuses. Hoy en día podemos comprar online hasta los pasajes en tren internos de un país, elegir el horario y el asiento, y abonar el pasaje con meses de anticipación.
                            </Accordion.Body>
                        </Accordion.Item>   
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><strong>¿En dónde?</strong></Accordion.Header>
                            <Accordion.Body>
                                Con la diversidad de plataformas online especializadas en el tema, no tendremos problema en elegir en dónde hospedarnos.
                                Es importante leer las diferentes opiniones en más de un portal, sobre todo las más recientes. La zona en donde se encuentra un alojamiento puede haber sido "trending" hace 10 años, y ser un lugar abandonado o peligroso en la actualidad, o viceversa.<br /><br />

                                Si viajás a Europa, sobre todo con personas mayores o de movilidad reducida, recomiendo prestar atención al tema de los ascensores.Aunque para nosotros resulta obvio pensar en edificios con ascensores, muchos edificios antiguos en Europa no los tienen.Incluso hoteles de varios pisos y unas cuantas estrellas.Así que, a menos que no te importe subir y bajar digamos que 4 pisos por las escaleras todo el tiempo, incluyendo el equipaje al llegar y al partir, ¡es fundamental averiguar si el lugar en donde elegimos hospedarnos en esa hermosa ciudad europea tiene ascensor!
                            </Accordion.Body>
                        </Accordion.Item> 
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><strong>¿Qué?</strong></Accordion.Header>
                            <Accordion.Body>
                                Una vez más, a través de portales especializados o los websites de diferentes compañías turísticas, hoy en día es posible elegir y reservar todas las excursiones que deseamos realizar en nuestro destino. <br /><br />
                                Al igual que con el hospedaje, es fundamental leer las diferentes opiniones en más de un portal, sobre todo las más recientes.<br /><br />
                                Además de contratar excursiones individuales, vale tener en cuenta la posibilidad que ofrecen muchas ciudades en el mundo a través de sus "city pass".En este caso, aconsejo primero hacer una lista de todas las excursiones que deseamos hacer y el costo de contratar cada una de ellas individualmente.Una vez que tenemos esa información, podemos averiguar si la ciudad a la que vamos ofrece uno de esos "city pass" y ver cuánto sale y si las excursiones que dejamos están incluídas en ese pase.Según lo que deseemos hacer, puede llegar a ser conveniente adquirir un pase en vez de las excursiones por separado.
                            </Accordion.Body>
                        </Accordion.Item>  
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><strong>Transporte público</strong></Accordion.Header>
                            <Accordion.Body>
                                Esto es importante sobre todo si vamos a estar en una gran ciudad (o si estaremos en una ciudad pequeña pero no queremos movernos todo el tiempo con auto de alquiler o taxi).<br /><br />
                                Si la ciudad a la que vamos tiene un buen transporte público, es conveniente anotar con anticipación las opciones que tenemos para movernos en el mismo entre los diferentes sitios que deseamos visitar, los distintos pases que ofrecen para turistas (ejemplo, pases de viajes ilimitados válidos por determinada cantidad de días consecutivos), si existen zonas u horarios en los que no es seguro utilizar determinado medio de transporte, etc.
                            </Accordion.Body>
                        </Accordion.Item>  

                    </Accordion>

            </section>
            <aside>
                <figure>
                    <blockquote className="blockquote">  
                        <p>Deambulamos en busca de distracción, pero viajamos en busca de satisfacción.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">  
                        <cite title="Source Title">Hilaire Belloc</cite> 
                    </figcaption>
                </figure>
            </aside>
        </div>
    )
}

export default Tips;