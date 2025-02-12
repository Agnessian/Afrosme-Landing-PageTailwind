import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import customer from "../assets/images/customer.svg";

export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#login", label: "Login" },
];

export const services =[
    {label: "Hairstylists"},
    {label: "Tailors"},
    {label: "Barbers"},
    {label: "Makeup Artists"},
    {label: "Photographers"},
    {label: "Chefs"},
    {label: "And many more"},
];
export const reviews = [
    {
        imgURL: customer,
        customerName: 'Morich Brown',
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer,
        customerName: 'Lota Mongeskar',
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer,
        customerName: 'Morich Lara',
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
];
export const footerLinks = [
    {
        links: [
            { name: "About", link: "#about" },
            { name: "Contact", link: "#contact" },
            { name: "Terms of service", link: "/" },
        ],
    },
    {
        links: [
            { name: "Terms of service", link: "/" },
            { name: "Privacy Policy", link: "/" },
            
        ],
    },
];
export const socialMedia = [
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];