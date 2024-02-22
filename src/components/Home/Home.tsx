import './Home.scss';
import Nav from '../Nav/Nav';
import LandingSection from '../LandingSection/LandingSection';
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import TileSection from '../TileSection/TileSection';
import TileItem from '../TileItem/TileItem';
import classroom from '../../assets/images/classroom.webp';

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
                    <TileItem title="Tile 2" content="This is the second tile. Random text loool hello how do you do wnahts good,  how does this wrtiing effect the tile, hopefu;lly it looks normal. Best practice I think would be to create a type and data file for tile content" />,
                    <TileItem title="Tile 3" content="This is the third tile" />,
                    <TileItem image={classroom} />]}
                />
                {/* <TileSection tiles={[
                    <TileItem title="Tile 5" content="This is the fifth tile" />,
                    <TileItem title="Tile 6" content="This is the sixth tile" />,
                    <TileItem title="Tile 7" content="This is the seventh tile" />,
                    <TileItem title="Tile 8" content="This is the eighth tile" />]}
                /> */}
            </div>
        </>
    );
    }
export default Home;
