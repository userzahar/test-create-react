import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = document.getElementById('root');
const div = React.createElement('div', { name: 'main', id: 'test', className: "test-class" }, 'muchacha');

ReactDOM.createRoot(root).render(div );
