import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFullDetail} from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: Boolean;
  movieFullDetail?: MovieFullDetail;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFullDetail: undefined,
    cast: []
});

  const getMoviesDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFullDetail>(`/${ movieId }`);
    const castPromise = movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

    const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);

    setState({
        isLoading: false,
        movieFullDetail: movieDetailsResp.data,
        cast: castPromiseResp.data.cast
    })

  };

  useEffect(() => {
    getMoviesDetails();
  }, []);

  return {
    ...state,
  };
};
