export type Contact = {
    name: string;
    email: string;
    phone: string;
    address: string;
    socials: Social[];
    image?: string;
}

export type Social = {
    name: string;
    link: string;
    icon: string;
}
