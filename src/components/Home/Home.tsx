import './Home.scss';
import Nav from '../Nav/Nav';
import LandingSection from '../LandingSection/LandingSection';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <div className="home">
                <Nav />
                <LandingSection />
                <Banner content="Welcome to our site!" />
                <h1>Home</h1>
            </div>
        </>
    );
    }
export default Home;
