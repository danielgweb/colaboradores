import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jumbotron from "react-bootstrap/Jumbotron";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Logout from "../../Login/Logout";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import api from "../../../services/api";
import _ from 'lodash';
import ContatoList from "./ContatoList";
import "./css/Editor.css"

class Editor extends Component {

    state = {
        showModal: null,
        movieDetails: '',

        nome: '',
        cargos: [],
        times: [],
        experiencias: [],
        competencias: [],
        contatos: [],
        cargo_exp: '',
        tecnologias_exp: '',
        atividades_exp: ''
    };

    async componentDidMount() {
        let cargos = await api.get('/cargo/list');
        let cargosList = _.map(cargos.data, _.property('name'));

        let times = await api.get('/time/list');
        let timeList = _.map(times.data, _.property('name'));

        let competencias = await api.get('/competencia/list');
        let competenciasList = _.map(competencias.data, _.property('name'));

        this.setState({cargos: cargosList});
        this.setState({times: timeList});
        this.setState({competencias: competenciasList});
    }

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.addContact = this.addContact.bind(this);
        this.addExperiencia = this.addExperiencia.bind(this);
        this.cargoExpHandler = this.cargoExpHandler.bind(this);
        this.tecnologiasExpHandler = this.tecnologiasExpHandler.bind(this);
        this.atividadesExpHandler = this.atividadesExpHandler.bind(this);
    }

    showModal(id) {
        this.setState({showModal: id});
    }

    hideModal() {
        this.setState({showModal: null});
    }

    addContact() {
        this.setState({contatos: this.state.contatos.concat({})})
    }

    addExperiencia(){
        this.hideModal()
        this.setState({experiencias: this.state.experiencias.concat({
                cargo: this.state.cargo_exp,
                atividades: this.state.atividades_exp,
                tecnologias: this.state.tecnologias_exp
        })});
        this.setState({cargo_exp: ''});
        this.setState({tecnologias_exp: ''});
        this.setState({atividades_exp: ''});
    }

    cargoExpHandler(cargo) {
        this.setState({cargo_exp: cargo.target.value});
    }

    tecnologiasExpHandler(tecnologias) {
        this.setState({tecnologias_exp: tecnologias.target.value});
    }

    atividadesExpHandler(atividades) {
        this.setState({atividades_exp: atividades.target.value});
    }

    render() {
        return <Container>
            <Jumbotron>
                <Logout />
                <Row>
                    <Col>
                        <h1 className="titulo"><FontAwesomeIcon icon={faUsers}/> Adicionar Colaborador</h1>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2rem' }}>
                    <Col>
                        <Link to="/colaboradores">
                            <Button variant="secondary">Voltar</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <Button variant="primary" className="float-right">Salvar</Button>{' '}
                    </Col>
                </Row>
            <Row>
                <Col>
                    <Row>
                        <Col lg={10}>
                            <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined"
                                       style={{backgroundColor: "white", marginTop: "5px"}}
                            />
                        </Col>
                        <Col lg={10}>
                            <Autocomplete
                                id="cargo"
                                freeSolo
                                options={this.state.cargos}
                                renderInput={(params) => (
                                    <TextField {...params} label="Cargo" variant="outlined"
                                               style={{backgroundColor: "white", marginTop: "5px"}}
                                    />
                                )}
                            />
                        </Col>
                        <Col lg={10}>
                            <Autocomplete
                                id="time"
                                freeSolo
                                options={this.state.times}
                                renderInput={(params) => (
                                    <TextField {...params} label="Time" variant="outlined"
                                               style={{backgroundColor: "white", marginTop: "5px"}}
                                    />
                                )}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
                <Row>
                    <Col>
                        <h2 className="subtitulo">Experiências Profissionais</h2>
                        <Button variant="primary" onClick={() => this.showModal('addExp')}>
                            Adicionar experiência
                        </Button>
                        <Modal
                            show={this.state.showModal === 'addExp'}
                            onHide={this.hideModal}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            backdrop="static"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Adicionar Experiência Profissional
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Autocomplete
                                                id="cargo"
                                                freeSolo
                                                options={this.state.cargos}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Cargo" variant="outlined"
                                                               style={{backgroundColor: "white", marginTop: "5px"}}
                                                               onChange={this.cargoExpHandler}
                                                    />
                                                )}
                                            />
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>Atividades</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl as="textarea" aria-label="Atividades" onChange={this.atividadesExpHandler} />
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>Tecnologias</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl as="textarea" aria-label="Tecnologias" onChange={this.tecnologiasExpHandler}/>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.addExperiencia()}>Adicionar</Button>
                            </Modal.Footer>
                        </Modal>
                        <h2 className="subtitulo">Competências</h2>
                        <Autocomplete
                            multiple
                            freeSolo
                            id="tags-standard"
                            options={this.state.competencias}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Adicionar Competências"
                                    placeholder="Digite enter para incluir uma nova competência"
                                />
                            )}
                        />
                        <h2 className="subtitulo">Contatos</h2>
                        <Button variant="primary" onClick={() => this.addContact()}>
                            Adicionar contato
                        </Button>
                        <ContatoList contatos={this.state.contatos}/>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    }
}

export default Editor;
