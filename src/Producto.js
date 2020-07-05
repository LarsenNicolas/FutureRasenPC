import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {ListGroupItem} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class Producto extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ListGroupItem>
                <p>{this.props.data.name}</p>
                <Button variant="outline-secondary"  ><Link to={"/detalle-producto/"+this.props.data.id} class='link'>Ver detalle</Link></Button>{' '}
            </ListGroupItem>
        )
    }

}

export default Producto;
