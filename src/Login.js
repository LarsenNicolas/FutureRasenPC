import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class Login extends  React.Component {
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
                                <Form.Control stype="text" placeholder="Usuario" />
                                <br/>
                                <Form.Control type="password" placeholder="Contraseña" />
                                <br/>
                                <Button variant="outline-secondary">Ingresar</Button>
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
            </Container>

        )
    }

}

export default Login;
