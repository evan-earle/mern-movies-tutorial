import User from "../models/User.js";
import axios from "axios";

export const storePhoto = async (req, res, next) => {
  try {
    const data = await User.findByIdAndUpdate(req.user.id, {
      image: req.body.photo,
    }).select("image");
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

export const getWatchlist = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.id, {}).select("watchlist");

    const promises = data.watchlist.map(async (id) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
      );

      return response.data;
    });

    const results = await Promise.all(promises);

    return res.status(200).json(results);
  } catch (error) {
    return next(error);
  }
};

export const addWatchlist = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

export const deleteWatchlist = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};
