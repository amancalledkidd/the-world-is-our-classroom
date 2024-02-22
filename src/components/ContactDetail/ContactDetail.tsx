import './ContactDetails.scss';
import { contactData } from '../../data/contactData';
import SocialsContainer from '../SocialsContainer/SocialsContainer';


const ContactDetails = () => {
    return (
        <div className="contact-details">
            <p className='contact-details__content'>Name: {contactData.name}</p>
            <p className='contact-details__content'>Email: {contactData.email}</p>
            <p className='contact-details__content'>Phone Number:{contactData.phone}</p>
            <div className="contact-details__socials">
                <SocialsContainer  socials={contactData.socials}/>
            </div>
        </div>
    );
}

export default ContactDetails;