import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'; 
import video from "../assets/banner.mp4"

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
      <button className='banner-btn'>
        Browse Books
        </button>
    </div>
    
    
   
  </div>

  <section className='first-section'>
    <div>
      <h4>
        Books feed intellect. <br />
        <FontAwesomeIcon icon={faReadme} />
      </h4>
    </div>
    <div>
      <h4>
    Reading sparks wisdom. <br />
    <FontAwesomeIcon icon={faReadme} />
    </h4>
    </div>
  </section>

  <section className='second-section'>
    <div>
      <img src="../img/section2.png" alt="" />
    </div>
  </section>



  
  </>;
};
