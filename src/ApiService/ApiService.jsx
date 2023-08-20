import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (searchQuery, page) => {
  const API_KEY = '36835837-2f914ff43afd708d9168e5b34';
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export default fetchImages;
