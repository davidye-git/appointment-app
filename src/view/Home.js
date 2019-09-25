import React from "react";
import { Container, Col, Row } from 'reactstrap';
import TimeTable from '../components/TimeTable';
import Title from '../components/Title';
import Appointment from '../models/Appointment';
import AppointmentModal from '../components/AppointmentModal';

class Home extends React.Component {

  state = {
    appointments: null,
    modal: false,
    selectedAppointment: new Appointment('')
  };

  componentDidMount() {
    this.initializeTheState();
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

  }

  initializeTheState () {
    let times = [
      '9:00 am', 
      '10:00 am', 
      '11:00 am', 
      '12:00 pm', 
      '1:00 pm', 
      '2:00 pm', 
      '3:00 pm', 
      '4:00 pm', 
      '5:00 pm'
    ];

    let emptyAppointments = [];
    for( let time of times ) {
      emptyAppointments.push(new Appointment(time));
    }
    this.setState({appointments: emptyAppointments});
  }

  openAndPopulateModal = (e) => {
    let selectedTime = e.target.parentElement.firstChild.innerText;

    let selectedAppointment = this.state.appointments.filter ( 
      e => e.start_time === selectedTime);

    this.setState ( { selectedAppointment: selectedAppointment[0] }, this.toggleModal);
  }

  updateAppointmentInformation = () => {
    let time = document.querySelector('.modal-title').innerText;
    let newName = document.querySelector('#modalInputName').value
    let newPhone = document.querySelector('#modalInputPhone').value

    let newAppointment = new Appointment(time);
    newAppointment.name = newName;
    newAppointment.phone = newPhone;
    newAppointment.booked = (newName || newPhone) ? true : false;

    let appointments = this.state.appointments;

    let index = appointments.findIndex( appt => appt.start_time === time );
    appointments[index] = newAppointment;

    this.setState( { appointments: appointments }, this.toggleModal );
  }

  /* componentWillMount deprecated */
  renderAfterInitialization = () => {
    if(!this.state.appointments) {
      return <div>Loading...</div>
    } else {
      return (
        <Row>
          <Col sm="1"></Col>
          <Col>
            <TimeTable 
              appointments={this.state.appointments} 
              openModal={this.openAndPopulateModal} />
          </Col>
          <Col sm="1"></Col>
        </Row>
      )
    }
  }

  render () {
    return (
      <Container>
        <Title align="text-center" title="Appointment Times"/>
        {this.renderAfterInitialization()}
        <AppointmentModal 
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          submit={this.updateAppointmentInformation}
          selectedAppointment={this.state.selectedAppointment}
        />
      </Container>
    );
  }
}

export default Home;
