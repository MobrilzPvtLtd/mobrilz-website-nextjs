import { FaAws, FaBolt, FaBug, FaChartBar, FaCloud, FaCloudUploadAlt, FaCogs, FaDatabase, FaDesktop, FaDocker, FaExchangeAlt, FaFileCode, FaGithub, FaGlobe, FaHdd, FaLaptopCode, FaLock, FaMicrochip, FaNetworkWired, FaPlug, FaProjectDiagram, FaRobot, FaRoute, FaServer, FaShieldAlt, FaSync, FaTachometerAlt, FaTerminal, FaUserCog, FaWrench} from "react-icons/fa";

export const devOpsServices = [
    // Core DevOps Services
    {
        title: 'CI/CD Implementation',
        icon: FaSync,
        description: 'Automating software delivery and infrastructure changes.',
        features: [
            'Continuous Integration Setup',
            'Continuous Deployment Pipelines',
            'Build Automation',
            'Release Management'
        ],
        url: '/services/devops/cicd-implementation',
        category: 'core'
    },
    {
        title: 'Infrastructure as Code',
        icon: FaFileCode,
        description: 'Managing infrastructure through machine-readable definition files.',
        features: [
            'Terraform Implementation',
            'CloudFormation Setup',
            'Ansible Configuration',
            'Infrastructure Versioning'
        ],
        url: '/services/devops/infrastructure-as-code',
        category: 'core'
    },
    {
        title: 'Cloud Architecture',
        icon: FaCloud,
        description: 'Designing and implementing cloud-based infrastructure.',
        features: [
            'AWS/Azure/GCP Architecture',
            'Multi-Cloud Strategy',
            'Serverless Architecture',
            'Cloud Cost Optimization'
        ],
        url: '/services/devops/cloud-architecture',
        category: 'core'
    },
    // Specific DevOps Services
    {
        title: 'Containerization & Orchestration',
        icon: FaDocker,
        description: 'Implementing container-based deployment solutions.',
        features: [
            'Docker Implementation',
            'Kubernetes Orchestration',
            'Container Registry Setup',
            'Microservices Architecture'
        ],
        url: '/services/devops/containerization',
        category: 'specific'
    },
    {
        title: 'Monitoring & Logging',
        icon: FaTachometerAlt,
        description: 'Setting up comprehensive system visibility.',
        features: [
            'Monitoring Infrastructure Setup',
            'Log Aggregation',
            'Performance Monitoring',
            'Alert Management'
        ],
        url: '/services/devops/monitoring-logging',
        category: 'specific'
    },
    {
        title: 'DevSecOps',
        icon: FaShieldAlt,
        description: 'Integrating security into the DevOps lifecycle.',
        features: [
            'Security Automation',
            'Vulnerability Scanning',
            'Compliance as Code',
            'Secret Management'
        ],
        url: '/services/devops/devsecops',
        category: 'specific'
    },
    // Related & Supplementary Services
    {
        title: 'Site Reliability Engineering',
        icon: FaServer,
        description: 'Ensuring application reliability and scalability.',
        features: [
            'SLO/SLA Definition',
            'Reliability Testing',
            'Incident Response Automation',
            'Chaos Engineering'
        ],
        url: '/services/devops/site-reliability',
        category: 'supplementary'
    },
    {
        title: 'Database DevOps',
        icon: FaDatabase,
        description: 'Applying DevOps practices to database management.',
        features: [
            'Database Version Control',
            'Automated Database Deployments',
            'Schema Migration Automation',
            'Database Performance Optimization'
        ],
        url: '/services/devops/database-devops',
        category: 'supplementary'
    },
    {
        title: 'DevOps Consulting & Training',
        icon: FaUserCog,
        description: 'Expert guidance for DevOps transformation.',
        features: [
            'DevOps Maturity Assessment',
            'Team Training & Enablement',
            'Process Improvement',
            'Tool Selection Guidance'
        ],
        url: '/services/devops/consulting-training',
        category: 'supplementary'
    }
];

export const maintenanceServices = [
    // Core Maintenance Services
    {
        title: 'Application Maintenance',
        icon: FaWrench,
        description: 'Keeping your software running smoothly and efficiently.',
        features: [
            'Bug Fixing & Resolution',
            'Performance Optimization',
            'Version Updates',
            'Feature Enhancements'
        ],
        url: '/services/maintenance/application-maintenance',
        category: 'core'
    },
    {
        title: 'Infrastructure Management',
        icon: FaNetworkWired,
        description: 'Maintaining and optimizing your technical infrastructure.',
        features: [
            'Server Management',
            'Network Maintenance',
            'Cloud Resources Optimization',
            'Infrastructure Scaling'
        ],
        url: '/services/maintenance/infrastructure-management',
        category: 'core'
    },
    {
        title: 'Security Maintenance',
        icon: FaLock,
        description: 'Protecting your systems against evolving threats.',
        features: [
            'Security Patches & Updates',
            'Vulnerability Assessment',
            'Security Monitoring',
            'Incident Response'
        ],
        url: '/services/maintenance/security-maintenance',
        category: 'core'
    },
    // Specific Maintenance Services
    {
        title: 'Database Maintenance',
        icon: FaHdd,
        description: 'Ensuring database performance and reliability.',
        features: [
            'Database Optimization',
            'Backup & Recovery',
            'Data Integrity Checks',
            'Query Performance Tuning'
        ],
        url: '/services/maintenance/database-maintenance',
        category: 'specific'
    },
    {
        title: 'Website Maintenance',
        icon: FaGlobe,
        description: 'Keeping your website updated and performing optimally.',
        features: [
            'Content Updates',
            'Plugin & CMS Updates',
            'Performance Optimization',
            'Broken Link Checking'
        ],
        url: '/services/maintenance/website-maintenance',
        category: 'specific'
    },
    {
        title: 'Legacy System Support',
        icon: FaDesktop,
        description: 'Maintaining and extending older systems.',
        features: [
            'Legacy Code Maintenance',
            'System Documentation',
            'Compatibility Updates',
            'Migration Planning'
        ],
        url: '/services/maintenance/legacy-support',
        category: 'specific'
    },
    // Related & Supplementary Services
    {
        title: 'Performance Monitoring',
        icon: FaChartBar,
        description: 'Continuous tracking of system performance.',
        features: [
            'Real-time Monitoring',
            'Performance Reporting',
            'Load Testing',
            'Bottleneck Identification'
        ],
        url: '/services/maintenance/performance-monitoring',
        category: 'supplementary'
    },
    {
        title: 'Backup & Disaster Recovery',
        icon: FaCloudUploadAlt,
        description: 'Protecting your data and ensuring business continuity.',
        features: [
            'Backup Strategy Development',
            'Automated Backup Solutions',
            'Disaster Recovery Planning',
            'Recovery Testing'
        ],
        url: '/services/maintenance/backup-disaster-recovery',
        category: 'supplementary'
    },
    {
        title: 'Technical Support',
        icon: FaLaptopCode,
        description: 'Expert assistance for technical issues.',
        features: [
            '24/7 Support Options',
            'Issue Troubleshooting',
            'User Support',
            'Technical Documentation'
        ],
        url: '/services/maintenance/technical-support',
        category: 'supplementary'
    }
];

export const apiIntegrationServices = [
    // Core API Integration Services
    {
        title: 'API Development',
        icon: FaCogs,
        description: 'Building robust and scalable APIs for your systems.',
        features: [
            'RESTful API Development',
            'GraphQL API Development',
            'API Documentation',
            'API Security Implementation'
        ],
        url: '/services/api-integration/api-development',
        category: 'core'
    },
    {
        title: 'Third-Party API Integration',
        icon: FaPlug,
        description: 'Connecting your systems with external services.',
        features: [
            'Payment Gateway Integration',
            'Social Media API Integration',
            'CRM & ERP Connections',
            'Analytics Platform Integration'
        ],
        url: '/services/api-integration/third-party-integration',
        category: 'core'
    },
    {
        title: 'API Management',
        icon: FaProjectDiagram,
        description: 'Managing your API ecosystem effectively.',
        features: [
            'API Gateway Implementation',
            'API Monitoring & Analytics',
            'Version Management',
            'API Lifecycle Management'
        ],
        url: '/services/api-integration/api-management',
        category: 'core'
    },
    // Specific API Integration Services
    {
        title: 'Microservices Architecture',
        icon: FaMicrochip,
        description: 'Building modular, API-driven application architectures.',
        features: [
            'Microservices Design',
            'Service Decomposition',
            'Inter-service Communication',
            'Service Discovery Implementation'
        ],
        url: '/services/api-integration/microservices',
        category: 'specific'
    },
    {
        title: 'Data Integration',
        icon: FaExchangeAlt,
        description: 'Connecting disparate data sources through APIs.',
        features: [
            'ETL Process Development',
            'Real-time Data Synchronization',
            'Data Transformation Services',
            'Integration Platform Setup'
        ],
        url: '/services/api-integration/data-integration',
        category: 'specific'
    },
    {
        title: 'Webhook Implementation',
        icon: FaBolt,
        description: 'Setting up real-time data transmission between systems.',
        features: [
            'Webhook Endpoint Development',
            'Event-driven Architecture',
            'Payload Processing',
            'Retry & Error Handling'
        ],
        url: '/services/api-integration/webhook-implementation',
        category: 'specific'
    },
    // Related & Supplementary Services
    {
        title: 'API Testing & QA',
        icon: FaBug,
        description: 'Ensuring API reliability and performance.',
        features: [
            'Automated API Testing',
            'Load & Performance Testing',
            'Security Testing',
            'Documentation Validation'
        ],
        url: '/services/api-integration/api-testing',
        category: 'supplementary'
    },
    {
        title: 'API Strategy Consulting',
        icon: FaRoute,
        description: 'Expert guidance for API strategy and implementation.',
        features: [
            'API Strategy Development',
            'API Design Reviews',
            'API Governance Framework',
            'API Monetization Strategy'
        ],
        url: '/services/api-integration/api-strategy',
        category: 'supplementary'
    },
    {
        title: 'API Automation',
        icon: FaRobot,
        description: 'Streamlining processes through API automation.',
        features: [
            'Business Process Automation',
            'Workflow Automation',
            'Integration Orchestration',
            'No-code Integration Tools'
        ],
        url: '/services/api-integration/api-automation',
        category: 'supplementary'
    }
];