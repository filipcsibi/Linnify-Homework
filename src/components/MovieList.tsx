import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import {moviedata} from '../types/MyPressable.intefrace';
import {MyMovieCard} from './MovieCard';
import {MyMovieDetails} from './MovieDetails';
import {
  CinemaRouteProps,
  CinemaRoutes,
} from './navigation/routes/cinema_routes';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {MySearchBar} from './easySearchBar';
import {MovieState, useMovieStore} from '../store/useMovieStore';
import {MMKV} from 'react-native-mmkv';
import {getMovies as fetchMovies} from '../services/movie.service';

export const date: moviedata[] = [
  {
    image: require('../assets/movie.jpg'),
    name: 'The Shawshank Redemption',
    time: '2:34 hours',
    type: 'Crime',
    description:
      'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the mans unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
    id: 1,
  },
  {
    image: require('../assets/movie2.jpg'),
    name: 'Orphan: First Kill',
    time: '1:37 hours',
    type: 'Horror',
    description:
      'After orchestrating a brilliant escape from an Estonian psychiatric facility, Esther travels to America by impersonating the missing daughter of a wealthy family. Yet, an unexpected twist arises that pits her against a mother who will protect her family from the murderous "child" at any cost.',
    id: 2,
  },
  {
    image: require('../assets/movie3.jpg'),
    name: 'After Ever Happy',
    time: '1:57 hours',
    type: 'Drama',
    description:
      'As a shocking truth about a couples families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met... Read all.',
    id: 3,
  },
  {
    image: require('../assets/movie4.jpg'),
    name: 'The Man from Toronto',
    time: '3:21 hours',
    type: 'Comedy',
    description:
      'A case of mistaken identity arises after a screw-up sales consultant and the worlds deadliest assassin--known only as The Man from Toronto--run into each other at a holiday rental.',
    id: 4,
  },
];
export const MyMovieList = ({
  navigation,
}: StackScreenProps<CinemaRouteProps, CinemaRoutes.List>) => {
  const Navi = (item: moviedata) => {
    navigation.navigate(CinemaRoutes.Detailed, {...item});
  };
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(false);

  const handleFetchMovies = async () => {
    const movies = await fetchMovies(page);
    if (!movies) {
      setEnd(true);
    }
    return movies;
  };
  // const renderItem = ({item}: ListRenderItemInfo<moviedata>) => (
  //   <MyMovieCard item={item} onPress={() => Navi(item)} />
  // );
  const storage = new MMKV();

  const {movies, setCurrentMovie, getMovies} = useMovieStore(
    (state: MovieState) => {
      return {
        movies: state.movies,
        setCurrentMovie: state.setCurrentMovie,
        getMovies: state.getMovies,
      };
    },
  );
  // useEffect(() => {
  //   fetchMovies().then((data: moviedata[]) => {
  //     getMovies(data);
  //   });
  // });
  useEffect(() => {
    // storage.set('anykey', 'aa');

    if (!end)
      fetchMovies(page).then((data: moviedata[]) => {
        getMovies([...movies, ...data]);
        // setPage(page + 1);
        setLoadingMore(false);
        setLoading(false);
      });
  }, [page]);

  const onEndReached = () => {
    if (loadingMore) return;
    setPage(page + 1);
    setLoadingMore(true);
  };
  const onRefresh = () => {
    setPage(1);
    //setLoading(true);

    console.log('refreshing', page);
  };

  const renderItem = ({item}: ListRenderItemInfo<moviedata>) => (
    <MyMovieCard
      item={item}
      onPress={() => {
        setCurrentMovie(item);
        Navi(item);
      }}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={loading ? <ActivityIndicator /> : <View />}
      data={movies}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      style={{backgroundColor: '#200423'}}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshing={loading}
      onRefresh={onRefresh}
      contentContainerStyle={!movies.length ? {flex: 1} : {}}
      ListFooterComponent={() =>
        loadingMore ? <ActivityIndicator /> : <View />
      }
      ListEmptyComponent={<ActivityIndicator style={{flex: 1}} />}
      // onRefresh={onRefresh}
    />
  );
};
