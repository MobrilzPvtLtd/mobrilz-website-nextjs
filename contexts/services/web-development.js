import { 
    FaCode, 
    FaServer, 
    FaLayerGroup, 
    FaPencilRuler, 
    FaDatabase, 
    FaShoppingCart, 
    FaWordpress, 
    FaTools, 
    FaSearch, 
    FaShieldAlt 
} from 'react-icons/fa';

// Web Development Services categorized by type
export const webDevelopmentServices = [
    // Core Web Development Services
    {
        title: 'Front-End Development',
        icon: FaCode,
        description: 'Creating engaging user interfaces and experiences.',
        features: [
            'HTML5 & CSS3 Development',
            'JavaScript Programming',
            'React/Next.js Development',
            'Responsive Design Implementation'
        ],
        url: '/services/web-development/frontend-development',
        category: 'core'
    },
    {
        title: 'Back-End Development',
        icon: FaServer,
        description: 'Building robust server-side applications.',
        features: [
            'Server-Side Programming',
            'Database Management',
            'API Development',
            'Security Implementation'
        ],
        url: '/services/web-development/backend-development',
        category: 'core'
    },
    {
        title: 'Full-Stack Development',
        icon: FaLayerGroup,
        description: 'End-to-end web application development.',
        features: [
            'Full Application Architecture',
            'Frontend & Backend Integration',
            'Database Design',
            'API Development'
        ],
        url: '/services/web-development/full-stack-development',
        category: 'core'
    },
    // Specific Website & Application Development
    {
        title: 'Custom Web Applications',
        icon: FaPencilRuler,
        description: 'Tailored web solutions for your business needs.',
        features: [
            'Bespoke Web Applications',
            'Enterprise Solutions',
            'Cloud Integration',
            'Scalable Architecture'
        ],
        url: '/services/web-development/custom-applications',
        category: 'specific'
    },
    {
        title: 'CMS Development',
        icon: FaWordpress,
        description: 'Content management system development.',
        features: [
            'WordPress Development',
            'Custom CMS Solutions',
            'Content Migration',
            'Plugin Development'
        ],
        url: '/services/web-development/cms-development',
        category: 'specific'
    },
    {
        title: 'E-Commerce Solutions',
        icon: FaShoppingCart,
        description: 'Building powerful online stores.',
        features: [
            'Custom Shopping Platforms',
            'Payment Integration',
            'Inventory Management',
            'Mobile Commerce'
        ],
        url: '/services/web-development/ecommerce',
        category: 'specific'
    },
    // Related & Supplementary Services
    {
        title: 'Web Maintenance',
        icon: FaTools,
        description: 'Keeping your web applications up-to-date.',
        features: [
            'Regular Updates',
            'Performance Monitoring',
            'Security Patches',
            'Content Updates'
        ],
        url: '/services/web-development/maintenance',
        category: 'supplementary'
    },
    {
        title: 'SEO Implementation',
        icon: FaSearch,
        description: 'Optimize your website for search engines.',
        features: [
            'Technical SEO',
            'On-Page Optimization',
            'Performance Tuning',
            'Analytics Integration'
        ],
        url: '/services/web-development/seo',
        category: 'supplementary'
    },
    {
        title: 'Web Security',
        icon: FaShieldAlt,
        description: 'Protect your web applications.',
        features: [
            'Security Audits',
            'SSL Implementation',
            'Data Protection',
            'Access Control'
        ],
        url: '/services/web-development/security',
        category: 'supplementary'
    }
];

export const developmentProcess = [
    {
        title: 'Discovery',
        description: 'Understanding your requirements and planning the solution.'
    },
    {
        title: 'Design',
        description: 'Creating wireframes and visual designs for your approval.'
    },
    {
        title: 'Development',
        description: 'Building your solution with quality code and best practices.'
    },
    {
        title: 'Deployment',
        description: 'Testing, launching, and maintaining your web solution.'
    }
];

export const clientTestimonials = [
    {
        name: 'John Doe',
        position: 'CEO, TechCorp',
        quote: 'Exceptional web development service. Delivered beyond expectations.',
        rating: 5,
        image: 'https://picsum.photos/seed/john-doe/200/200'
    },
    {
        name: 'Sarah Smith',
        position: 'CTO, InnovateX',
        quote: 'Their expertise in web development helped us transform our digital presence.',
        rating: 5,
        image: 'https://picsum.photos/seed/sarah-smith/200/200'
    },
    {
        name: 'Mike Johnson',
        position: 'Founder, StartupHub',
        quote: 'Professional team that delivers quality web solutions on time.',
        rating: 5,
        image: 'https://picsum.photos/seed/mike-johnson/200/200'
    }
];