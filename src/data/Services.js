// Service Image Icons
import mainIcon1 from '../assets/img/service/style2/main-img/1.png';
import hoverIcon1 from '../assets/img/service/style2/hover-img/1.png';
import mainIcon2 from '../assets/img/service/style2/main-img/2.png';
import hoverIcon2 from '../assets/img/service/style2/hover-img/2.png';
import mainIcon3 from '../assets/img/service/style2/main-img/3.png';
import hoverIcon3 from '../assets/img/service/style2/hover-img/3.png';
import mainIcon4 from '../assets/img/service/style2/main-img/4.png';
import hoverIcon4 from '../assets/img/service/style2/hover-img/4.png';
import mainIcon5 from '../assets/img/service/style2/main-img/5.png';
import hoverIcon5 from '../assets/img/service/style2/hover-img/5.png';
import mainIcon6 from '../assets/img/service/style2/main-img/6.png';
import hoverIcon6 from '../assets/img/service/style2/hover-img/6.png';
import softwareIconMain from '../assets/img/service/style3/main-img/1.png'
import softwareIconHover from '../assets/img/service/style3/hover-img/1.png'
import cryptoIconMain from '../assets/img/service/style3/main-img/8.png'
import cryptoIconHover from '../assets/img/service/style3/hover-img/8.png'
import ecommIconMain from '../assets/img/service/style3/main-img/9.png'
import ecommIconHover from '../assets/img/service/style3/hover-img/9.png'
import legalIconMain from '../assets/img/service/style3/main-img/3.png'
import legalIconHover from '../assets/img/service/style3/hover-img/3.png'
import aiIconMain from '../assets/img/service/style3/main-img/7.png'
import aiIconHover from '../assets/img/service/style3/hover-img/7.png'
import cybersecurityIconMain from '../assets/img/service/style3/main-img/6.png'
import cybersecurityIconHover from '../assets/img/service/style3/hover-img/6.png'

class Service {
    constructor(title, text, mainIcon, hoverIcon) {
        this.title = title;
        this.text = text;
        this.mainIcon = mainIcon;
        this.hoverIcon = hoverIcon;
    }
}

export const ServiceList = [
    new Service(
        "Web & App Development",
        "Transform your digital presence with stunning, high-performance websites and mobile apps that captivate your audience.",
        mainIcon2,
        hoverIcon2,
    ),
    new Service(
        "Software Development",
        "Power your business with bespoke software solutions engineered for peak performance and seamless integration.",
        softwareIconMain,
        softwareIconHover,
    ),
    new Service(
        "E-commerce",
        "Launch and scale your online empire with our comprehensive e-commerce platforms that drive explosive growth.",
        ecommIconMain,
        ecommIconHover,
    ),
    new Service(
        "AI & Machine Learning",
        "Unlock the power of artificial intelligence to revolutionize your operations and uncover game-changing insights.",
        aiIconMain,
        aiIconHover,
    ),
    new Service(
        "Cybersecurity",
        "Fortify your digital fortress with enterprise-grade security solutions that keep your business safe 24/7.",
        cybersecurityIconMain,
        cybersecurityIconHover,
    ),
    new Service(
        "Cloud & DevOps",
        "Accelerate innovation with cloud-native architectures and DevOps excellence that scales with your ambitions.",
        mainIcon4,
        hoverIcon4,
    ),
    new Service(
        "Technology Consulting",
        "Chart your digital transformation with expert guidance that turns technology into your competitive advantage.",
        mainIcon1,
        hoverIcon1,
    ),
    new Service(
        "Analytics Solutions",
        "Transform raw data into strategic gold with cutting-edge analytics that drive smarter business decisions.",
        mainIcon3,
        hoverIcon3,
    ),
    new Service(
        "Product & Design",
        "Craft unforgettable digital experiences that delight users and drive engagement through innovative design.",
        mainIcon5,
        hoverIcon5,
    ),
    new Service(
        "Database Design",
        "Build bulletproof data architectures that power your business with speed, security, and scalability.",
        mainIcon6,
        hoverIcon6,
    ),
    new Service(
        "Blockchain & Crypto",
        "Pioneer the future of finance with secure, transparent blockchain solutions that redefine digital transactions.",
        cryptoIconMain,
        cryptoIconHover,
    ),
    new Service(
        "Legal Tech Consulting",
        "Navigate the digital legal landscape with expert guidance that ensures compliance and protects your interests.",
        legalIconMain,
        legalIconHover,
    ),
];