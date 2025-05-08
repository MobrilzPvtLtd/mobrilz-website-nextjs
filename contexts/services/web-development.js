


// Web Development Services categorized by type

import { FaAndroid, FaApple, FaBriefcase, FaBug, FaBuilding, FaChartBar, FaChartLine, FaCloudUploadAlt, FaCode, FaComments, FaCubes, FaGlobe, FaLaptopCode, FaLayerGroup, FaLifeRing, FaLock, FaMobile, FaMobileAlt, FaPalette, FaPalfed, FaPencilRuler, FaProjectDiagram, FaRedo, FaSearch, FaServer, FaShieldAlt, FaShoppingBag, FaShoppingCart, FaSync, FaTachometerAlt, FaTools, FaWordpress, FaWrench } from "react-icons/fa";

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

export const mobileAppDevelopmentServices = [
    // Core Mobile App Development Services
    {
        title: 'iOS App Development',
        icon: FaApple,
        description: 'Creating native applications for Apple devices.',
        features: [
            'Swift & Objective-C Development',
            'iOS UI/UX Implementation',
            'Apple Store Submission',
            'iOS Framework Integration'
        ],
        url: '/services/mobile-apps/ios-development',
        category: 'core'
    },
    {
        title: 'Android App Development',
        icon: FaAndroid,
        description: 'Building robust applications for Android devices.',
        features: [
            'Kotlin & Java Development',
            'Material Design Implementation',
            'Google Play Store Publishing',
            'Android SDK Integration'
        ],
        url: '/services/mobile-apps/android-development',
        category: 'core'
    },
    {
        title: 'Cross-Platform Development',
        icon: FaMobile,
        description: 'Develop once, deploy everywhere solutions.',
        features: [
            'React Native Development',
            'Flutter Development',
            'Shared Codebase Architecture',
            'Multi-Platform UI/UX Design'
        ],
        url: '/services/mobile-apps/cross-platform',
        category: 'core'
    },
    // Specific Mobile App Categories
    {
        title: 'Enterprise Mobile Solutions',
        icon: FaBriefcase,
        description: 'Secure and scalable apps for business needs.',
        features: [
            'Workflow Automation Apps',
            'Enterprise Resource Planning',
            'Internal Communication Tools',
            'Data Management Systems'
        ],
        url: '/services/mobile-apps/enterprise-solutions',
        category: 'specific'
    },
    {
        title: 'E-Commerce Mobile Apps',
        icon: FaShoppingBag,
        description: 'Creating powerful mobile shopping experiences.',
        features: [
            'Mobile Shopping Platforms',
            'Payment Gateway Integration',
            'Product Catalog Management',
            'Push Notification Systems'
        ],
        url: '/services/mobile-apps/ecommerce-apps',
        category: 'specific'
    },
    {
        title: 'Social & Communication Apps',
        icon: FaComments,
        description: 'Building engaging social and messaging platforms.',
        features: [
            'Real-time Chat Integration',
            'Social Networking Features',
            'Media Sharing Capabilities',
            'User Engagement Tools'
        ],
        url: '/services/mobile-apps/social-apps',
        category: 'specific'
    },
    // Related & Supplementary Services
    {
        title: 'App Maintenance & Support',
        icon: FaWrench,
        description: 'Keeping your mobile applications running smoothly.',
        features: [
            'Regular Updates & Patches',
            'Performance Optimization',
            'Bug Fixes & Improvements',
            'OS Compatibility Updates'
        ],
        url: '/services/mobile-apps/maintenance',
        category: 'supplementary'
    },
    {
        title: 'App Store Optimization',
        icon: FaChartLine,
        description: 'Improve visibility and downloads for your app.',
        features: [
            'Keyword Optimization',
            'Conversion Rate Improvement',
            'App Rating Management',
            'Competitive Analysis'
        ],
        url: '/services/mobile-apps/app-store-optimization',
        category: 'supplementary'
    },
    {
        title: 'Mobile App Security',
        icon: FaLock,
        description: 'Protect user data and ensure app security.',
        features: [
            'Secure Authentication',
            'Data Encryption',
            'Vulnerability Testing',
            'Compliance Implementation'
        ],
        url: '/services/mobile-apps/security',
        category: 'supplementary'
    }
];

export const cloudServices = [
    // Core Cloud Services
    {
        title: 'Cloud Migration',
        icon: FaCloudUploadAlt,
        description: 'Seamlessly transition your systems to the cloud.',
        features: [
            'Infrastructure Assessment',
            'Migration Strategy Development',
            'Data Transfer & Validation',
            'Post-Migration Support'
        ],
        url: '/services/cloud-solutions/migration',
        category: 'core'
    },
    {
        title: 'Cloud Infrastructure',
        icon: FaServer,
        description: 'Build and manage reliable cloud infrastructure.',
        features: [
            'IaaS Implementation',
            'Virtual Machine Configuration',
            'Network Architecture Design',
            'Storage Solutions'
        ],
        url: '/services/cloud-solutions/infrastructure',
        category: 'core'
    },
    {
        title: 'Cloud Application Development',
        icon: FaCode,
        description: 'Develop cloud-native applications for your business.',
        features: [
            'Containerized Applications',
            'Microservices Architecture',
            'Serverless Computing',
            'API Development'
        ],
        url: '/services/cloud-solutions/application-development',
        category: 'core'
    },
    // Specific Cloud Services
    {
        title: 'Multi-Cloud Management',
        icon: FaCubes,
        description: 'Manage resources across multiple cloud platforms.',
        features: [
            'Multi-Platform Integration',
            'Unified Management Console',
            'Cost Optimization',
            'Resource Allocation'
        ],
        url: '/services/cloud-solutions/multi-cloud-management',
        category: 'specific'
    },
    {
        title: 'DevOps & CI/CD',
        icon: FaSync,
        description: 'Streamline development and deployment processes.',
        features: [
            'CI/CD Pipeline Implementation',
            'Infrastructure as Code',
            'Automated Testing',
            'Continuous Monitoring'
        ],
        url: '/services/cloud-solutions/devops',
        category: 'specific'
    },
    {
        title: 'Data Analytics & Big Data',
        icon: FaChartBar,
        description: 'Leverage cloud capabilities for data processing.',
        features: [
            'Big Data Processing',
            'Real-time Analytics',
            'Data Warehouse Implementation',
            'Business Intelligence Solutions'
        ],
        url: '/services/cloud-solutions/data-analytics',
        category: 'specific'
    },
    // Related & Supplementary Services
    {
        title: 'Cloud Security',
        icon: FaShieldAlt,
        description: 'Protect your cloud environments and data.',
        features: [
            'Security Assessment',
            'Identity & Access Management',
            'Encryption Implementation',
            'Compliance Solutions'
        ],
        url: '/services/cloud-solutions/security',
        category: 'supplementary'
    },
    {
        title: 'Cloud Optimization',
        icon: FaTachometerAlt,
        description: 'Enhance performance and reduce cloud costs.',
        features: [
            'Resource Utilization Analysis',
            'Cost Management',
            'Performance Tuning',
            'Scalability Planning'
        ],
        url: '/services/cloud-solutions/optimization',
        category: 'supplementary'
    },
    {
        title: 'Disaster Recovery',
        icon: FaLifeRing,
        description: 'Ensure business continuity with robust backup solutions.',
        features: [
            'Backup Strategy Development',
            'Disaster Recovery Planning',
            'Automated Backup Systems',
            'Recovery Testing'
        ],
        url: '/services/cloud-solutions/disaster-recovery',
        category: 'supplementary'
    }
];

export const customSoftwareServices = [
    // Core Software Services
    {
        title: 'Custom Software Development',
        icon: FaLaptopCode,
        description: 'Tailored software solutions designed for your business needs.',
        features: [
            'Requirements Analysis',
            'Architecture & Design',
            'Custom Application Development',
            'Deployment & Support'
        ],
        url: '/services/custom-software/custom-software-development',
        category: 'core'
    },
    {
        title: 'Mobile App Development',
        icon: FaMobileAlt,
        description: 'Build powerful mobile apps for iOS and Android platforms.',
        features: [
            'Native & Cross-Platform Apps',
            'UI/UX Design',
            'API Integration',
            'App Store Deployment'
        ],
        url: '/services/custom-software/mobile-app-development',
        category: 'core'
    },
    {
        title: 'Web Application Development',
        icon: FaGlobe,
        description: 'Develop scalable web applications for various industries.',
        features: [
            'Responsive Web Design',
            'Backend & Frontend Development',
            'Progressive Web Apps',
            'Cloud Integration'
        ],
        url: '/services/custom-software/web-application-development',
        category: 'core'
    },
    // Specific Software Services
    {
        title: 'Enterprise Software Solutions',
        icon: FaBuilding,
        description: 'Empower enterprises with robust, scalable solutions.',
        features: [
            'ERP & CRM Systems',
            'Workflow Automation',
            'Data Management Solutions',
            'Integration with Legacy Systems'
        ],
        url: '/services/custom-software/enterprise-software-solutions',
        category: 'specific'
    },
    {
        title: 'Software Integration Services',
        icon: FaProjectDiagram,
        description: 'Seamlessly integrate new software with your existing systems.',
        features: [
            'Third-Party API Integration',
            'System Compatibility Assessment',
            'Data Synchronization',
            'Custom Middleware Development'
        ],
        url: '/services/custom-software/Software Integration Services',
        category: 'specific'
    },
    {
        title: 'Software Testing & QA',
        icon: FaBug,
        description: 'Ensure software reliability through rigorous testing.',
        features: [
            'Manual & Automated Testing',
            'Performance & Load Testing',
            'Bug Tracking & Reporting',
            'Security Testing'
        ],
        url: '/services/custom-software/software-testing ',
        category: 'specific'
    },
    // Supplementary Services
    {
        title: 'UI/UX Design Services',
        icon: FaPalfed,
        description: 'Design intuitive, engaging user experiences.',
        features: [
            'User Research & Personas',
            'Wireframing & Prototyping',
            'Visual Design',
            'Usability Testing'
        ],
        url: '/services/custom-software/design-services',
        category: 'supplementary'
    },
    {
        title: 'Software Maintenance & Support',
        icon: FaTools,
        description: 'Keep your software running smoothly with ongoing support.',
        features: [
            'Bug Fixing & Updates',
            'Performance Monitoring',
            'Feature Enhancements',
            'Technical Support'
        ],
        url: '/services/custom-software/maintenance',
        category: 'supplementary'
    },
    {
        title: 'Legacy System Modernization',
        icon: FaRedo,
        description: 'Revitalize outdated systems with modern technologies.',
        features: [
            'Legacy Code Refactoring',
            'Technology Upgrades',
            'Cloud Migration',
            'System Re-Engineering'
        ],
        url: '/services/custom-software/modernization',
        category: 'supplementary'
    }
];
