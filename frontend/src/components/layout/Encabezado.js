import Header from './Header'
import Nav from './Nav'
import './../../styles/components/layout/Encabezado.css';

const Encabezado = (props) => {
    return(
        <div id="encabezado">
            <Header/>
            <Nav/>
        </div>
    )
}

export default Encabezado;