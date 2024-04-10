import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'; 
import video from "../assets/banner.mp4"
import { Link } from 'react-router-dom';

export const Home = () => {
  return <>
  <div className='banner'>
    <div className='overlay'>
    </div>
      <video src={video} autoPlay loop muted />
      <div className='banner-text'>
      <h1 className='title'>Welcome to your favorite online book store! 
      <br />
      <FontAwesomeIcon icon={faReadme} /></h1>
      <Link to="/products" className='banner-btn'>Browse Books</Link>
    </div>
  </div>


  </>;
};
