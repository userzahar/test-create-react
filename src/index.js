import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card';

const root = document.getElementById('root');

// const p = <p id='test-p-id'>I am2 P</p>;

// const div2 = <div id='test' name='main' className='test-class'>{p}</div>;


ReactDOM.createRoot(root).render(<Card />);
