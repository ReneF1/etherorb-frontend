import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from '../components/Countdown/Countdown.jsx'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Countdown />, div);
});