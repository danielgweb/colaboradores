import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Experiencia extends Component {

    render() {
        return <Row>
                <Col>
                    Cargo: {this.props.experiencia.cargo}
                </Col>
                <Col>
                    Atividades: {this.props.experiencia.atividades}
                </Col>
                <Col>
                    Tecnologias: {this.props.experiencia.tecnologias}
                </Col>
            </Row>;
    }
}

export default Experiencia;
