import axios from "axios";

export const getPopularMovies = async (req, res, next) => {
  const page = req.params.page;
  try {
    const response = await axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`);
    const data = response.data;
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

export const searchMovies = async (req, res, next) => {
  const page = req.params.page;
  try {
    const response = await axios.get(`
          https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`);
    const data = response.data;
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

export const getMovie = async (req, res, next) => {
  const page = req.params.page;
  try {
    const response = await axios.get(`
          https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`);
    const data = response.data;
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

export const getGenres = async (req, res, next) => {
  const page = req.params.page;
  try {
    const response = await axios.get(`
          https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`);
    const data = response.data;
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};
