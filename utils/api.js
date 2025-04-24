import qs from 'qs';

/**
 * Get full Strapi URL from path
 */
export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://admin.mobrilz.com'}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 */
export async function getStrapiAPI(path, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ''}`
    )}`;

    // Make the request
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      throw new Error(`API error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}