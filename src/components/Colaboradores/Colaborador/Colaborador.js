import Card from "react-bootstrap/Card";
import no_photo from "../../../no_photo.png";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import React, {Component} from "react";

class Colaborador extends Component {

    render() {
        return <Card style={{ width: '18rem' }}>
            <Card.Img style={{ padding: '5px', height: '250px' }} variant="top"
                      src={this.props.colaborador.foto === null ? no_photo : this.props.colaborador.foto} />

            <Card.Body>
                <Card.Title>{this.props.colaborador.name}</Card.Title>
                <Card.Text>
                    Competências <br />
                    {this.props.colaborador.competencias.map(competencia => (<>[{competencia.name}] </>))}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cargo: {this.props.colaborador.cargo.name}</ListGroupItem>
            </ListGroup>
            <Card.Footer>
                <small className="text-muted">Time: {this.props.colaborador.time.name}</small>
            </Card.Footer>
        </Card>;
    }
}

export default Colaborador;
