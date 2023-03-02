import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json';

const root = document.getElementById('root');

// const p = <p id='test-p-id'>I am2 P</p>;

// const div2 = <div id='test' name='main' className='test-class'>{p}</div>;
const Header = () => {
    return <p>I am Header</p>
}



const Card = () => {
    return data.map((photo) => {
        return (<div key={photo.id} className="card" style={{ width: '18rem' }}>
            <img src={photo.url} className="card-img-top" alt={photo.title} />
            <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="http" className="btn btn-primary">Go somewhere</a>
                <Header />
            </div>
        </div>)
    }
    )
}; 
ReactDOM.createRoot(root).render(<Card />);
