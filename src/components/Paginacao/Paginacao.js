import React, {Component} from 'react';
import Pagination from "react-bootstrap/Pagination";


class Paginacao extends Component {

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);
    }

    async handlePagination(pageNum) {
        this.props.handler(pageNum);
    }

    render() {
        return <Pagination style={{ marginTop: '1rem' }}>
            {this.props.current_page !== 1 ?
                <>
                    <Pagination.First onClick={(e) => this.handlePagination(1)}/>
                    <Pagination.Prev onClick={(e) => this.handlePagination(this.props.current_page-1)}/>
                </>
                : null}
            {this.props.current_page - 2 > 0 ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.props.current_page-2)}>
                    {this.props.current_page-2}
                </Pagination.Item>
                : null}
            {this.props.current_page - 1 > 0 ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.props.current_page-1)}>
                    {this.props.current_page-1}
                </Pagination.Item>
                : null}
            <Pagination.Item active>{this.props.current_page}</Pagination.Item>
            {this.props.current_page + 1 <= this.props.pages_amount ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.props.current_page+1)}>
                    {this.props.current_page+1}
                </Pagination.Item>
                : null}
            {this.props.current_page + 2 <= this.props.pages_amount ?
                <Pagination.Item onClick={(e) => this.handlePagination(this.props.current_page+2)}>
                    {this.props.current_page+2}
                </Pagination.Item>
                : null}
            {this.props.current_page !== this.props.pages_amount ?
                <>
                    <Pagination.Next onClick={(e) => this.handlePagination(this.props.current_page+1)} />
                    <Pagination.Last onClick={(e) => this.handlePagination(this.props.pages_amount)}/>
                </>
                : null }
        </Pagination>
    }

}

export default Paginacao;
