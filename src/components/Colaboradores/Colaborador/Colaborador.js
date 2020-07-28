import Card from "react-bootstrap/Card";
import no_photo from "../../../no_photo.png";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import React, {Component} from "react";

class Colaborador extends Component {

    render() {
        return <Card>
            <Card.Img variant="top" src={no_photo} />

            <Card.Body>
                <Card.Title>{this.props.colaborador.nome}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{this.props.colaborador.cargo}</ListGroupItem>
                <ListGroupItem>{this.props.colaborador.competencias}</ListGroupItem>
            </ListGroup>
            <Card.Footer>
                <small className="text-muted">{this.props.colaborador.time}</small>
            </Card.Footer>
        </Card>;
    }
}

export default Colaborador;
