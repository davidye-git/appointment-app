import React from 'react';
import { Col, Row } from 'reactstrap';

const Title = (props) => (
    <Row>
        <Col 
            className={props.align}>
            {props.title}
        </Col>
    </Row>
)

export default Title;