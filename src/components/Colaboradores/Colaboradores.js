import React, {Component} from 'react';
// import './Login.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaColaboradores from "./Lista/ListaColaboradores";

class Colaboradores extends Component {

    render() {

        return (
            <Container>
                <Jumbotron>
                    <h1>Colaboradores</h1>
                    <Button variant="primary">+ Novo</Button>{' '}
                    <Form>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nome, Cargo, Competência ou Time"
                                aria-label="Nome, Cargo, Competência ou Time"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Buscar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Nome"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch2"
                            label="Cargo"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch3"
                            label="Competência"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch4"
                            label="Time"
                            inline
                        />
                    </Form>

                    <ListaColaboradores />

                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Jumbotron>
            </Container>
        );
    }
}


export default Colaboradores;
