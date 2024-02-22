import './SocialsContainer.scss';
import { Social } from '../../types/contact';   

type SocialsContainerProps = {
    socials: Social[];
}

const SocialsContainer = ({ socials } : SocialsContainerProps) => {
    return (
        <div className="socials-container">
            {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noreferrer" className="socials-container__social">
                    <img src={social.icon} alt={social.name} />
                </a>
            ))}
        </div>
    );
}

export default SocialsContainer;