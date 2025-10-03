import axios from "axios";
const API_KEY = "9474732f";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
