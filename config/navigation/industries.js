import { 
  FaIndustry,
  FaBuilding,
  FaHeadset,
  FaChartLine,
  FaHandshake 
} from 'react-icons/fa';

export const industries = {
  sectors: {
    title: "Sectors",
    items: [
      {
        icon: FaIndustry,
        title: "Manufacturing",
        description: "Smart factory solutions",
        href: "/industries/manufacturing"
      },
      {
        icon: FaBuilding,
        title: "Finance",
        description: "Fintech innovations",
        href: "/industries/finance"
      },
      {
        icon: FaHeadset,
        title: "Healthcare",
        description: "Digital health systems",
        href: "/industries/healthcare"
      }
    ]
  },
  solutions: {
    title: "Solutions",
    items: [
      {
        icon: FaChartLine,
        title: "E-Commerce",
        description: "Online retail platforms",
        href: "/industries/e-commerce"
      },
      {
        icon: FaHandshake,
        title: "Consulting",
        description: "Business technology advice",
        href: "/industries/consulting"
      },
      {
        icon: FaBuilding,
        title: "Retail",
        description: "Point of sale systems",
        href: "/industries/retail"
      }
    ]
  }
};