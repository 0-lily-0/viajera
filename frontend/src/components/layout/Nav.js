import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './../../styles/components/layout/Nav.css';

const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navx-item" href="/">Home</Nav.Link>
                         <Nav.Link className="navx-item" href="/tips">Tips</Nav.Link>
                        <Nav.Link className="navx-item" href="/galeria">Galería</Nav.Link>
                        <Nav.Link className="navx-item" href="/novedades">Novedades</Nav.Link> 
                        <Nav.Link className="navx-item" href="/acercade">Acerca de</Nav.Link>
                         <Nav.Link className="navx-item" href="/contacto">Contacto</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;