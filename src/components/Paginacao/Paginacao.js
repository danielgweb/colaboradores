import React, {Component} from 'react';
import Pagination from "react-bootstrap/Pagination";


class Paginacao extends Component {

    state = {
        pagina_atual: 1,
    };

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);
    }

    async handlePagination(pageNum) {
        if(pageNum > this.props.ultima_pagina || pageNum <= 0) return null;
        this.setState({ pagina_atual: pageNum });
        this.props.handler(pageNum - 1);
    }

    render() {
        return <Pagination style={{ marginTop: '1rem' }}>
            {this.state.pagina_atual !== 1 ?
                <>
                    <Pagination.First onClick={(e) => this.handlePagination(1)}/>
                    <Pagination.Prev onClick={(e) => this.handlePagination(this.state.pagina_atual-1)}/>
                </>
                : null}
            {this.state.pagina_atual - 2 > 0 ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.state.pagina_atual-2)}>
                    {this.state.pagina_atual-2}
                </Pagination.Item>
                : null}
            {this.state.pagina_atual - 1 > 0 ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.state.pagina_atual-1)}>
                    {this.state.pagina_atual-1}
                </Pagination.Item>
                : null}
            <Pagination.Item active>{this.state.pagina_atual}</Pagination.Item>
            {this.state.pagina_atual + 1 <= this.props.ultima_pagina ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.state.pagina_atual+1)}>
                    {this.state.pagina_atual+1}
                </Pagination.Item>
                : null}
            {this.state.pagina_atual + 2 <= this.props.ultima_pagina ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.state.pagina_atual+2)}>
                    {this.state.pagina_atual+2}
                </Pagination.Item>
                : null}
            {this.state.pagina_atual !== this.props.ultima_pagina ?
                <>
                    <Pagination.Next onClick={(e) => this.handlePagination(this.state.pagina_atual+1)} />
                    <Pagination.Last onClick={(e) => this.handlePagination(this.props.ultima_pagina)}/>
                </>
                : null }
        </Pagination>
    }

}

export default Paginacao;
