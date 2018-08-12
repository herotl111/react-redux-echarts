import React, { Component } from 'react';
import {Badge,Row,Col,Button} from 'react-bootstrap';

class TopHeader extends Component {
    render(){
        return (
        <div>
            <Row>
                <Col md={3}><a onClick={this.props.onResetAllClicked}>Reset all</a></Col>
                <Col md={5}>Selected: <Badge>{this.props.selectedCount}</Badge></Col>
            </Row>
            <p></p>
        </div>
        );
    }
}

export default TopHeader;