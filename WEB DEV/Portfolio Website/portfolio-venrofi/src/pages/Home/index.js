import './index.scss'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';


const Home = () => {
    return (
        <>
          <NavBar />
          <main className="home-main">
            <h1>Let me design you a splendid <span className="text-highlight">Website</span>!</h1>  
            <div className="home-buttons">
              <Link to="/portfolio" className="button-primary">My Portfolio</Link>
              <Link to="/contact" className="button-outline">Contact Me</Link>
            </div>
            {/* <h1 className="bg-text">FRONTEND <br/> UX / UI</h1> */}
          </main>
          <Loader type="ball-clip-rotate" />
        </>
    )
}

export default Home