import React from "react";
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';

const Time = props => (
    <Col className='time' sm="4">
        { props.time }
    </Col>
)

const Name = props => (
    <Col className='name' sm="4">
        Name: { props.name }
    </Col>
)

const PhoneNumber = props => (
    <Col className='phone' sm="4">
        Contact: { props.phone }
    </Col>
)

const TimeSlot = appointment => (
    <ListGroupItem tag="button" action color={appointment.themeColor}>
        <Row onClick={appointment.openModal}> 
            <Time time={appointment.time}></Time>
            <Name name={appointment.name}></Name>
            <PhoneNumber phone={appointment.phone}></PhoneNumber>
        </Row>
    </ListGroupItem>
)

const TimeTable = props => (
    <ListGroup>
        {
            props.appointments.map((e, i) => {
                let themeColor = e.booked ? "danger" : "";
                return <TimeSlot 
                        key={i} 
                        themeColor={themeColor}
                        time={e.start_time} 
                        name={e.name} 
                        phone={e.phone} 
                        openModal={props.openModal}
                       />
            })
        }
    </ListGroup>
)

export default TimeTable;