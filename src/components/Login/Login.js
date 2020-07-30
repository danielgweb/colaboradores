import React, {Component} from 'react';
// import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from "../../services/api";
import {login} from "../../services/auth/auth";
import Jumbotron from "react-bootstrap/Jumbotron";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";

class Login extends Component {

    state = {
        username: "admin",
        password: "password",
        error: ""
    };

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({ error: "Preencha o usuario e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/login", {
                    username: this.state.username,
                    password: this.state.password
                });
                login(response.headers.authorization);

                this.props.history.push("/colaboradores");
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais."
                });
            }
        }
    };

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="titulo"><FontAwesomeIcon icon={faSignInAlt}/> Entrar</h1>
                    </Col>
                </Row>
                <Jumbotron>
                    <Row className="justify-content-md-center">
                        <Col md="7">
                            <Form onSubmit={this.handleSignIn}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Usuário</Form.Label>
                                    <Form.Control type="text" placeholder="Usuário" defaultValue="admin" onChange={this.handleChangeUsername}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Senha" defaultValue="password" onChange={this.handleChangePassword}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicStatus">
                                    {this.state.error}
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Entrar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Login;
