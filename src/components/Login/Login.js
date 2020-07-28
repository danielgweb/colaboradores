import React, {Component} from 'react';
// import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <Container>
            <Row className="justify-content-md-center">
                <Col md="7"><Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Usuário"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                    <Link to="/login">
                        <Button variant="primary" type="submit">
                            Entrar Logado
                        </Button>
                    </Link>
                </Form>
                </Col>
            </Row>

            </Container>
        );
    }
}

export default Login;
