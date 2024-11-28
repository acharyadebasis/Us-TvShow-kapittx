import axios from 'axios';

const TVMAZE_API_URL = "https://api.tvmaze.com";

// Function to fetch currently airing shows 
export const getAiringShows = async () => {
  try {
    const response = await axios.get(`${TVMAZE_API_URL}/schedule?country=US`);
    return response.data;
  } catch (error) {
    console.error("Error fetching airing shows:", error);
    throw error;
  }
};

// Function to fetch details of a particular show
export const getShowDetails = async (showId) => {
  try {
    const response = await axios.get(`${TVMAZE_API_URL}/shows/${showId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching show details:", error);
    throw error;
  }
};
