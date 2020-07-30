import React, {Component} from "react";
import Experiencia from "./Experiencia";

class ExperienciaList extends Component {

    render() {
        return <>
            {this.props.experiencias.map(experiencia => (
                <Experiencia experiencia={experiencia} />
            ))}
        </>;
    }
}

export default ExperienciaList;
