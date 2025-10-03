import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  getMovieDetails } from "../services/api";
import MovieDetail from "../components/MovieDetail";
import ErrorMessage from "../components/ErrorMessage";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  return (
    <div className="page movie-detail-page">
      {loading && <div className="loading">Loading...</div>}
      {error && <ErrorMessage message={error} />}
      {movie && <MovieDetail movie={movie} />}
    </div>
  );
};

export default MovieDetailPage;
