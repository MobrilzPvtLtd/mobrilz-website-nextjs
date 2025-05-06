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
    FaShieldAlt,
    FaApple,
    FaAndroid,
    FaMobile,
    FaBriefcase,
    FaShoppingBag,
    FaComments,
    FaWrench,
    FaChartLine,
    FaLock,
    FaCloudUploadAlt,
    FaCubes,
    FaSync,
    FaChartBar,
    FaTachometerAlt,
    FaLifeRing
} from 'react-icons/fa';

export const iconMap = {
    FaCode,
    FaServer,
    FaLayerGroup,
    FaPencilRuler,
    FaDatabase,
    FaShoppingCart,
    FaWordpress,
    FaTools,
    FaSearch,
    FaShieldAlt,
    FaApple,
    FaAndroid,
    FaMobile,
    FaBriefcase,
    FaShoppingBag,
    FaComments,
    FaWrench,
    FaChartLine,
    FaLock,
    FaCloudUploadAlt,
    FaCubes,
    FaSync,
    FaChartBar,
    FaTachometerAlt,
    FaLifeRing
};

export const getIcon = (iconName) => {
    return iconMap[iconName] || FaCode; // Returns FaCode as fallback
};