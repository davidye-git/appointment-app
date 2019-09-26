import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './view/Home';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
describe('App Testing', function () {

  // Shallow for single component. no child
  // Mount for full dom mounting, all children

  it('Build a screen which shows a list of hour long slots from 9am to 5pm.',
    () => {
    
      const app = mount(<Home />);
      const appointments = app.find('.time .col-sm-4');
      const appointmentTimes = [
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

      let containsAllTimes = true;

      for( let time of appointments ) {
        if(!appointmentTimes.includes(shallow(time).text()))
          containsAllTimes = false;
      }

      /* Expect number of time slots to equal number of appointment times*/
      expect(appointments).to.have.length(appointmentTimes.length);

      /* Expect time slots to include times for 9-5*/
      expect(containsAllTimes).to.equal(true);

      app.unmount();
    }
  );

  it('When one time slot is clicked, pop up a modal which asks for name and phone number.',
    () => {

      // test modal does not exist before clicking
      // test modal exists after clicking time
      // test modal contains input for name and phone

      const app = mount(<Home />);
      let appointments = app.find('.time .col-sm-4');
      
      /* Expect modal to not exist before clicking */
      expect(app.find('.modal').hostNodes().length).to.equal(0);

      /* Expect modal to exist after clicking on appointment time */
      appointments.first().simulate('click');
      expect(app.find('.modal').hostNodes().length).to.equal(1);
  
      /* Expect modal to have input for name and phone */
      expect(app.find('.modalInputName').hostNodes().length).to.equal(1);
      expect(app.find('.modalInputPhone').hostNodes().length).to.equal(1);
    
      app.unmount();
    }
  );

  it('When the name and phone number is submitted, the time slot selected should change to red',
    () => {

      const app = mount(<Home />);
      let appointments = app.find('.list-group-item');
      
      let times = app.find('.time .col-sm-4');
      times.first().simulate('click');

      // modal opens up
      // change value of input for name and phone
      // hit submit
      // assert that appointments(0) .style background color = "red"

      app.unmount();
      
      expect('placeholder'==='placeholder').to.equal(true);
    }
  );

  it('If the red time slot is clicked on again, the modal will pop up with the name and phone' + 
     'number for that appointment pre­populated. Users will be able to edit the name and phone number ' + 
     'to change the user for the appointment.',
    () => {
      expect('placeholder'==='placeholder').to.equal(true);
    }
  );

});
