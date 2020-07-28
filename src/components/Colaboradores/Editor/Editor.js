import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import no_photo from "../../../no_photo.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Editor extends Component {

    state = {
        showModal: null,
        movieDetails: ''
    };

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(id) {
        this.setState({showModal: id});
    }

    hideModal() {
        this.setState({showModal: null});
    }

    render() {
        return <Container>
            <Button variant="primary">Salvar</Button>{' '}
            <Row lg={1} md={1} sm={1} xl={1} xs={1}>
                <Col lg={4} md={4} sm={4} xl={4} xs={4}>
                    <Image src={no_photo} roundedCircle />
                </Col>
                <Col lg={8} md={8} sm={8} xl={8} xs={8}>
                    <Row lg={1} md={1} sm={1} xl={1} xs={1}>
                        <Col lg={10}>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-lg">Nome</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                        </Col>
                        <Col lg={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-lg">Cargo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control as="select">
                                    <option>Desenvolvedor Java</option>
                                    <option>Desenvolvedor ReactJS</option>
                                </Form.Control>
                            </InputGroup>
                        </Col>
                        <Col lg={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-lg">Time</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control as="select">
                                    <option>Squad Desenvolvimento</option>
                                    <option>Squad Orçamento</option>
                                </Form.Control>
                            </InputGroup></Col>
                    </Row>
                </Col>
            </Row>
            <h2>Experiências Profissionais</h2>
            <Button variant="primary" onClick={() => this.showModal('addExp')}>
                Adicionar
            </Button>
            <AdicionarExpProfissional show={this.state.showModal === 'addExp'} onHide={this.hideModal}/>
            <h2>Competências</h2>
            <h2>Contatos</h2>
        </Container>
    }
}

function AdicionarExpProfissional(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adicionar Experiência Profissional
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Editor;
