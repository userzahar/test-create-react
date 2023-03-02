import { Header } from './Header';
import data from '../data.json';
export const Card = () => {
    return data.map((photo) => {
        return (<div key={photo.id} className="card" style={{ width: '18rem' }}>
            <img src={photo.url} className="card-img-top" alt={photo.title} />
            <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="http" className="btn btn-primary">Go somewhere</a>
                <Header id={Math.random()} className="header-card" />
            </div>
        </div>)
    }
    )
}; 