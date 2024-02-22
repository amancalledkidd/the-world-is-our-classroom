import './Home.scss';
import Nav from '../Nav/Nav';
import LandingSection from '../LandingSection/LandingSection';
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import TileSection from '../TileSection/TileSection';
import TileItem from '../TileItem/TileItem';
import classroom from '../../assets/images/classroom.webp';
import FindOutMoreSection from '../FindOutMoreSection/FindOutMoreSection';
import ContactDetails from '../ContactDetail/ContactDetail';
import Testimony from '../Testimony/Testimony';

const Home = () => {

    return (
        <>
            <div className="home">
                <Nav />
                <LandingSection />
                <Banner content="Welcome to our site!" />
                <AboutSection />
                <TileSection tiles={[
                    <TileItem image={classroom} />,
                    <TileItem color='green' title="Tile 2" content="This is the second tile. Random text loool hello how do you do wnahts good,  how does this wrtiing effect the tile, hopefu;lly it looks normal. Best practice I think would be to create a type and data file for tile content" />,
                    <TileItem color='green' title="Tile 3" content="This is the third tile" />,
                    <TileItem image={classroom} />]}
                />
                <FindOutMoreSection />
                <TileSection tiles={[
                    <TileItem component={<Testimony author="Kumani" content="I recently had the privilege of engaging with the Brighter Futures Initiative, a remarkable charity dedicated to empowering students from underprivileged backgrounds. From the moment I got involved, I was thoroughly impressed by their unwavering commitment and innovative approach towards education and personal development."/>} />,
                    <TileItem component={<Testimony author="Charlotte" content="The team at Brighter Futures Initiative goes above and beyond to identify the unique needs of each student, offering tailored support that ranges from academic tutoring to mentorship programs, all aimed at nurturing confidence, skills, and a positive outlook towards the future. Their workshops and community activities are not only educational but also incredibly inspiring, creating a supportive environment where students feel valued and motivated."/> } />,
                    <TileItem color='blue' title="Contact" />,
                    <TileItem color='green' component={<ContactDetails />} />]}
                />
            </div>
        </>
    );
    }
export default Home;
