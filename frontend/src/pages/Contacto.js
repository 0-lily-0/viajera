import React  from 'react';
import '../styles/components/pages/Contacto.css';
import Form from 'react-bootstrap/Form';
import {Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacto = (props) => {
    return (
        <div id="contenedor">
            <section>
                <h2>Formulario de contacto</h2>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono1" className="col-lg-1">
                            <FontAwesomeIcon icon={['fas', 'user']} className="icono"/>
                            </Form.Group>                            
                            <Form.Group as={Col} controlId="formGridNombre" className="col-lg-5">
                            <Form.Control placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridApellido" className="col-lg-6">
                            <Form.Control placeholder="Apellido" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono2" className="col-lg-1">
                            <FontAwesomeIcon icon={['fas', 'envelope']} className="icono"/>
                            </Form.Group>  
                        <Form.Group as={Col} controlId="formGridEmail" className="col-lg-11">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono3" className="col-lg-1">
                            <FontAwesomeIcon icon={['fas', 'comment']} className="icono"/>
                            </Form.Group>  
                        <Form.Group as={Col} controlId="exampleForm.ControlComentario" className="col-lg-11">
                            <Form.Control as="textarea" placeholder="Inserte su mensaje aquí" rows={3} />
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono3" className="col-lg-10">                            
                            </Form.Group> 
                            <Form.Group as={Col} controlId="formGridIcono3" className="col-lg-2">                                                    
                                <Button variant="primary" type="submit">
                                    Enviar
                              </Button>
                        </Form.Group>
                        </Row>                        
                    </Form>
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

export default Contacto;