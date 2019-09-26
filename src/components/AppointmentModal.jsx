import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
         InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Appointment from '../models/Appointment';

export default class AppointmentModal extends React.Component {
  render () {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>
          {this.props.selectedAppointment.start_time}
        </ModalHeader>
        <ModalBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name:</InputGroupAddon>
              <Input placeholder="Name" className='modalInputName' defaultValue={this.props.selectedAppointment.name}/>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Contact:</InputGroupAddon>
              <Input placeholder="Phone" className='modalInputPhone' defaultValue={this.props.selectedAppointment.phone}/>
            </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.submit}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }

  static defaultProps = {
    selectedAppointment: new Appointment(''),
    isOpen: true,
    toggle: () => {},
    submit: () => {}
  }
};
