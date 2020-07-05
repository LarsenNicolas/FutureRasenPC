import React from 'react';
import './App.css';
import Producto from "./Producto";
import {ListGroup} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            products: []
        }
    }

    componentDidMount() {
        fetch('https://jsonfy.com/items')
            .then(res =>res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        loading: false,
                        products : result
                    })
                },
                (error) => {
                    console.log("Error" + error);
                }
            );
    }

    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        {this.state.loading ? <Spinner animation="border" variant="dark" /> : <ListGroup variant="flush">
                            {this.state.products.map(prod =><Producto data={prod}></Producto>)}
                        </ListGroup>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
