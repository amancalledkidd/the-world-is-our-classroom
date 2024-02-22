import './ContactDetails.scss';
import { contactData } from '../../data/contactData';

const ContactDetails = () => {
    return (
        <div className="contact-details">
            <p className='contact-details__content'>Name: {contactData.name}</p>
            <p className='contact-details__content'>Email: {contactData.email}</p>
            <p className='contact-details__content'>Phone Number:{contactData.phone}</p>
        </div>
    );
}

export default ContactDetails;