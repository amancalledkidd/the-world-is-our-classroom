import { Contact } from '../types/contact';
import linkedin from '../assets/icons/linkedIn.png';
import instagram from '../assets/icons/instagram.png';
import facebook from '../assets/icons/facebook.png';
import twitter from '../assets/icons/twitterx.png'

const socials = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        icon: linkedin
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com",
        icon: instagram
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com",
        icon: facebook
    },
    {
        name: "Twitter",
        link: "https://www.twitter.com",
        icon: twitter
    }
]

export const contactData: Contact = {
    name: "John Doe",
    email: "random@hotmail.com",
    phone: "123-456-7890",
    address: "1234 Elm St, Springfield, IL 62701",
    image: "https://via.placeholder.com/150",
    socials: socials
}
