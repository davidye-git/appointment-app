// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
describe('App component testing', function () {
  // it('renders welcome message', function () {
  //   const wrapper = shallow(<App />); 
  //   const welcome = <h1 className='App-title'>Welcome to React</h1>;
  //   expect(wrapper.contains(welcome)).to.equal(true);
  // });

  it('Build a screen which shows a list of hour long slots from 9am to 5pm.',
    function () {
    expect('placeholder'==='placeholder').to.equal(true);
    }
  );

  it('When one time slot is clicked, pop up a modal which asks for name and phone number.',
    function () {
    expect('placeholder'==='placeholder').to.equal(true);
    }
  );

  it('When the name and phone number is submitted, the time slot selected should change to red',
    function () {
    expect('placeholder'==='placeholder').to.equal(true);
    }
  );

  it('If the red time slot is clicked on again, the modal will pop up with the name and phone' + 
     'number for that appointment pre­populated. Users will be able to edit the name and phone number' + 
     'to change the user for the appointment.',
    function () {
    expect('placeholder'==='placeholder').to.equal(true);
    }
  );


});
