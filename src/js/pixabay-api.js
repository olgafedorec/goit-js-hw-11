const API_KEY = '43796292-928ecbabb016f283abab002e7';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotoByQuery = (q) => {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
  
    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      return response.json();
    });
  };