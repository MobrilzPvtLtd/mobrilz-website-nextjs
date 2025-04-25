import { 
  FaProjectDiagram,
  FaCogs,
  FaUsers,
  FaStar 
} from 'react-icons/fa';

export const work = {
  portfolio: {
    title: "Portfolio",
    items: [
      {
        icon: FaProjectDiagram,
        title: "Case Studies",
        description: "Success stories",
        href: "/work/case-studies"
      },
      {
        icon: FaCogs,
        title: "Portfolios",
        description: "Recent work",
        href: "/portfolios"
      },
      {
        icon: FaUsers,
        title: "Clients",
        description: "Who we work with",
        href: "/work/clients"
      },
      {
        icon: FaStar,
        title: "Testimonials",
        description: "Client feedback",
        href: "/work/testimonials"
      }
    ]
  }
};