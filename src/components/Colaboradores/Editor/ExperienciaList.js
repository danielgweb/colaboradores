import React, {Component} from "react";
import Contato from "./Contato";

class ContatoList extends Component {

    render() {
        return <>
            {this.props.contatos.map(contato => (
                <Contato contato={contato} />
            ))}
        </>;
    }
}

export default ContatoList;
