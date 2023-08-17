import axios from "axios";

const PIXABAY_KEY = process.env.REACT_APP_PB_API_KEY;

const refineSearchQuery = (searchQuery) => {
    return searchQuery.replace(/\s/g, '+');
}

// Get search results from Pixabay API
export const getPixabaySearch = async (searchQuery, page=1) => {
    const refinedSearchQuery = refineSearchQuery(searchQuery)
    const queryParams = {
        key: PIXABAY_KEY,
        q: refinedSearchQuery,
        safesearch: true,
        page: page,
    }
    const response = await axios.get("https://pixabay.com/api/", { params: queryParams });

    return {results: response.data.hits, totalHits: response.data.totalHits};
};

// Get single image from Pixabay API
export const getPixabayImage = async (imageId) => {
    const queryParams = {
        key: PIXABAY_KEY,
        id: imageId,
    }
    const response = await axios.get("https://pixabay.com/api/", { params: queryParams });
    return response.data.hits[0];
};
