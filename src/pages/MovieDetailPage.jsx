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
    <div className="px-4">
      {loading && (
        <div className="flex items-center justify-center py-32">
          <div className="w-10 h-10 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="text-center py-20 text-red-400">{error}</div>
      )}
      {movie && <MovieDetail movie={movie} />}
    </div>
  );
};

export default MovieDetailPage;
