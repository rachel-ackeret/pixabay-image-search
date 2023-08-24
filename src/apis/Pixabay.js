import axios from "axios";

const PIXABAY_KEY = process.env.REACT_APP_PB_API_KEY;

const refineSearchQuery = (searchQuery) => {
    return searchQuery.replace(/\s/g, '+');
}

// Get search results from Pixabay API
export const getPixabaySearch = async (searchQuery, page) => {
    const refinedSearchQuery = refineSearchQuery(searchQuery)
    const queryParams = {
        key: PIXABAY_KEY,
        q: refinedSearchQuery,
        safesearch: true,
        page: page,
    }
    let response;
    try {
        response = await axios.get("https://pixabay.com/api/", { params: queryParams });
    } catch (error) {
        if (error.response) {
            console.log('Response status:', error.response.status);
            console.log('Response data:', error.response.data);
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error:', error.message);
        }
          return {results: [], totalHits: 0};
    }

    return {results: response.data.hits, totalHits: response.data.totalHits};
};

// Get single image from Pixabay API
export const getPixabayImage = async (imageId) => {
    const queryParams = {
        key: PIXABAY_KEY,
        id: imageId,
    }

    let response;
    try {
        response = await axios.get("https://pixabay.com/api/", { params: queryParams });
    } catch (error) {
        if (error.response) {
            console.log('Response status:', error.response.status);
            console.log('Response data:', error.response.data);
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error:', error.message);
        }
          return null;
    }

    return response.data.hits[0];
};
