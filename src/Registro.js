import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card, Form} from "react-bootstrap";


class Registro extends  React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Nombre" />
                                <br />
                                <Form.Control type="text" placeholder="Apellido" />
                                <br />
                                <Form.Control stype="text" placeholder="E-mail" />
                                <br/>
                                <Form.Control stype="text" placeholder="Usuario" />
                                <br/>
                                <Form.Control type="password" stype="text" placeholder="Contraseña" />
                                <br/>
                                <Button variant="outline-secondary">Registrarse</Button>
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
            </Container>





    )
    }

}

export default Registro;
