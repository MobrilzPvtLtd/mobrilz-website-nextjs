import { services } from '../config/navigation/services';
import { industries } from '../config/navigation/industries';
import { work } from '../config/navigation/work';

export const useServices = () => {
  // Helper to safely get items from a category
  const getCategoryItems = (data, category) => {
    return data?.[category]?.items || [];
  };

  // Get all items from a data object
  const getAllItems = (data) => {
    return Object.values(data || {}).flatMap(category => category?.items || []);
  };

  const getAllServices = () => {
    return getAllItems(services);
  };

  const getServicesByCategory = (category) => {
    return getCategoryItems(services, category);
  };

  const getServiceBySlug = (slug) => {
    if (!slug) return null;
    return getAllServices().find(service => 
      service?.href?.split('/')?.pop() === slug
    );
  };

  const getAllIndustries = () => {
    return getAllItems(industries);
  };

  const getIndustriesByCategory = (category) => {
    return getCategoryItems(industries, category);
  };

  const getAllWork = () => {
    return getAllItems(work);
  };

  const getWorkByCategory = (category) => {
    return getCategoryItems(work, category);
  };

  return {
    // Original methods
    getAllServices,
    getServicesByCategory,
    getServiceBySlug,
    getAllIndustries,
    getAllWork,
    services,
    industries,
    work,
    // Additional helper methods
    getIndustriesByCategory,
    getWorkByCategory
  };
};