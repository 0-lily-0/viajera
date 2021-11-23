import {useState}  from 'react';
import axios from 'axios';
import '../styles/components/pages/Contacto.css';
import Form from 'react-bootstrap/Form';
import {Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',
        comentario: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <div id="contenedor">
            <section>
                <h2>Formulario de contacto</h2>
                    <Form action="/contacto" method="post" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono1" className="col-lg-1">
                            <FontAwesomeIcon icon={['fas', 'user']} className="icono"/>
                            </Form.Group>                            
                            <Form.Group as={Col} controlId="formGridNombre" className="col-lg-5">
                            <Form.Control placeholder="Nombre" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridApellido" className="col-lg-6">
                            <Form.Control placeholder="Apellido"  type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono2" className="col-lg-1">
                            <FontAwesomeIcon icon={['fas', 'envelope']} className="icono"/>
                            </Form.Group>  
                        <Form.Group as={Col} controlId="formGridEmail" className="col-lg-11">
                            <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIcono3" className="col-lg-1">
                            <FontAwesomeIcon icon={['fas', 'comment']} className="icono"/>
                            </Form.Group>  
                        <Form.Group as={Col} controlId="exampleForm.ControlComentario" className="col-lg-11">
                            <Form.Control as="textarea" placeholder="Inserte su mensaje aquí" rows={3}  name="comentario"  value={formData.comentario} onChange={handleChange}/>
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
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}                       
                    </Form>
            </section>
            <aside>
                <figure>
                    <blockquote className="blockquote">
                        <p>El mundo es un libro, y quienes no viajan leen sólo una página.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">
                        <cite title="Source Title">San Agustín</cite>
                    </figcaption>
                </figure>
            </aside>

        </div>
    )
}

export default Contacto;