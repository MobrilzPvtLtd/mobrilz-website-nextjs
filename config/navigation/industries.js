import { 
    FaIndustry,
    FaBuilding,
    FaHeadset,
    FaChartLine,
    FaHandshake,
    FaShoppingCart,
    FaGraduationCap,
    FaTruck,
    FaHospital
} from 'react-icons/fa';

export const industries = {
    sectors: {
        title: "Core Industries",
        description: "Delivering specialized solutions across key business sectors with deep domain expertise",
        items: [
            {
                icon: FaIndustry,
                title: "Manufacturing",
                description: "Smart factory solutions and industrial automation",
                href: "/industries/manufacturing"
            },
            {
                icon: FaBuilding,
                title: "Finance",
                description: "Fintech innovations and banking solutions",
                href: "/industries/finance"
            },
            {
                icon: FaHospital,
                title: "Healthcare",
                description: "Digital health systems and medical solutions",
                href: "/industries/healthcare"
            },
            {
                icon: FaGraduationCap,
                title: "Education",
                description: "E-learning and educational platforms",
                href: "/industries/education"
            }
        ]
    },
    solutions: {
        title: "Business Solutions",
        description: "Comprehensive digital solutions tailored for modern business challenges",
        items: [
            {
                icon: FaShoppingCart,
                title: "E-Commerce",
                description: "Online retail and marketplace solutions",
                href: "/industries/e-commerce"
            },
            {
                icon: FaHandshake,
                title: "Consulting",
                description: "Technology advisory and implementation",
                href: "/industries/consulting"
            },
            {
                icon: FaTruck,
                title: "Logistics",
                description: "Supply chain and delivery solutions",
                href: "/industries/logistics"
            }
        ]
    }
};