import {create} from 'zustand';
import {date} from '../components/MovieList';
import {moviedata} from '../types/MyPressable.intefrace';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from './zustandStorage';

export interface MovieState {
  movies: moviedata[];
  movie: moviedata | null;
  setCurrentMovie: (movie: moviedata) => void;
  getMovies: (movies: moviedata[]) => void;
}

export const useMovieStore = create<MovieState>(
  // persist<MovieState>(
  set => ({
    movies: [],
    movie: null,
    setCurrentMovie: (newMovie: moviedata) =>
      set((state: MovieState) => ({movie: newMovie})),
    getMovies: (arr: moviedata[]) =>
      set((state: MovieState) => ({movies: arr})),
  }),
  // {name: 'movie-storage', storage: createJSONStorage(() => zustandStorage)},
  // ),
);
