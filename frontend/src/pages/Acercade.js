import React from 'react';
import '../styles/components/pages/Acercade.css';



const Acercade = (props) => {
    return (
        <div id="contenedor">
            <section>

                <p> A algunas personas les gusta darse un gusto saliendo al cine, al teatro, a comer afuera... <br /><br />

                    A mí me encanta viajar. Uno o dos viajes al año, si puedo. Siempre tengo un plan de viaje en puerta. Es
                    mi "gustito". <br /><br />

                    Tuve la fortuna que desde chica mis padres consideraron importante que viajásemos de vacaciones en
                    familia - mis padres, mi hermana y yo - para conocer otros países. <br /><br />

                    Ahora, ya adulta, tiendo a volver una y otra vez a mis lugares preferidos. <br /><br />


                    Siempre digo que si ganase la lotería (difícil, dado que no juego), me dedicaría a viajar por el mundo 8
                    meses al año...
                </p>
            </section>
        <aside>
            <figure>
                <blockquote className="blockquote">  
                    <p>El hombre no puede descubrir nuevos océanos a menos que tenga el valor de perder de vista la
                        costa.</p>
                </blockquote>
                <figcaption className="blockquote-footer text-end">  
                    <cite title="Source Title">Andre Gide</cite>  
                </figcaption>
            </figure>
        </aside> 
    </div>

    )
}

export default Acercade;