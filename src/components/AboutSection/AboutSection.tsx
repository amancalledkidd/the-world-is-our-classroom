import './AboutSection.scss';
import { aboutData } from '../../data/aboutData';


const AboutSection = () => {
    return (
        <div className="about">
            <h1 className='about__header'>About</h1>
            <p className='about__content'>{aboutData.content}</p>
        </div>
    );
}

export default AboutSection;