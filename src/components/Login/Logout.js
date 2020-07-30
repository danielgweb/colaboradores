import React from 'react';
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {logout} from "../../services/auth/auth";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";

function Logout() {
    return <Row>
        <Col>
            <Link to="/" onClick={() => logout()}>
                <Button variant="outline-secondary" className="float-right botao">
                    <FontAwesomeIcon icon={faSignOutAlt}/> Sair
                </Button>{' '}
            </Link>
        </Col>
    </Row>;
}

export default Logout;
