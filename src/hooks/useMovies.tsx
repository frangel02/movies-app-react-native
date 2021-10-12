import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieinterface';

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [moviesCine, setMoviesCine] = useState<Movie[]>([]);
  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMoviesCine(resp.data.results);
    setisLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    moviesCine,
    isLoading,
  };
};
