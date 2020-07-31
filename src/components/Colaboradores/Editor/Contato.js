import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";

class Contato extends Component {

    render() {
        return <Row className='mt-1'>
            <Col>
                <Form.Control as="select">
                    <option>E-mail</option>
                    <option>LinkedIn</option>
                    <option>Telefone</option>
                    <option>Telefone Fixo</option>
                    <option>Telefone Celular</option>
                </Form.Control>
            </Col>
            <Col>
                <Form.Control type="text" />
            </Col>
        </Row>;
    }
}

export default Contato;
