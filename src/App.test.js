import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    }
);



describe ('App', () => {
   it ('must have a test', () => {
         expect(true).toBe(true);
    }
    );
});





