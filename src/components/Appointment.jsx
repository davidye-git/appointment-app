import React from 'react';

export default class Appointment extends React.Component {
    state = {
        time: null,
        name: null,
        phone: null,
        booked: false
    }

    render () {
        return (
            <ListGroupItem tag="button" action color={appointment.themeColor}>
                <Row onClick={appointment.openModal}> 
                <Col className='time' sm="4">{ this.state.time }</Col>
                <Col className='name' sm="4">Name:{ this.state.name }</Col>
                <Col className='phone' sm="4">Contact:{ this.state.phone }</Col>
                    {/* <Time time={appointment.time}></Time>
                    <Name name={appointment.name}></Name>
                    <PhoneNumber phone={appointment.phone}></PhoneNumber> */}
                </Row>
            </ListGroupItem>
        );
    }
};