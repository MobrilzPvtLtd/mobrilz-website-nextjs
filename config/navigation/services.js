import { 
    FaCode, 
    FaServer, 
    FaCloud, 
    FaCogs, 
    FaPalette, 
    FaChartLine,
    FaHandshake,
    FaMobile,
    FaNetworkWired,
    FaBrain,
    FaShieldAlt,
    FaDatabase
} from 'react-icons/fa';

export const services = {
    development: {
        title: "Development",
        items: [
            {
                icon: FaCode,
                title: "Web Development",
                description: "Custom websites & web applications",
                href: "/services/web-development"
            },
            {
                icon: FaMobile,
                title: "Mobile Apps",
                description: "iOS & Android development",
                href: "/services/mobile-apps"
            },
            {
                icon: FaCloud,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure",
                href: "/services/cloud-solutions"
            },
            {
                icon: FaCogs,
                title: "Custom Software",
                description: "Tailored business solutions",
                href: "/services/custom-software"
            }
        ]
    },
    design: {
        title: "Design",
        items: [
            {
                icon: FaPalette,
                title: "UI/UX Design",
                description: "User-centered interfaces",
                href: "/services/ui-ux-design"
            },
            {
                icon: FaChartLine,
                title: "Branding",
                description: "Brand identity & strategy",
                href: "/services/branding"
            },
            {
                icon: FaBrain,
                title: "Product Design",
                description: "Digital product innovation",
                href: "/services/product-design"
            }
        ]
    },
    solutions: {
        title: "Solutions",
        items: [
            {
                icon: FaShieldAlt,
                title: "DevOps",
                description: "Automated development ops",
                href: "/services/devops"
            },
            {
                icon: FaDatabase,
                title: "API Integration",
                description: "Seamless system connections",
                href: "/services/api-integration"
            },
            {
                icon: FaNetworkWired,
                title: "Maintenance",
                description: "Ongoing system support",
                href: "/services/maintenance"
            }
        ]
    }
};