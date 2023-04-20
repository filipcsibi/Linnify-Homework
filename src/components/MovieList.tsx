import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {moviedata} from '../types/MyPressable.intefrace';
import {MyMovieCard} from './MovieCard';
import {MyMovieDetails} from './MovieDetails';
import {
  CinemaRouteProps,
  CinemaRoutes,
} from './navigation/routes/cinema_routes';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';
const date: moviedata[] = [
  {
    image: require('../assets/movie.jpg'),
    title: 'The Shawshank Redemption',
    time: '2:34 hours',
    type: 'Crime',
    description:
      'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the mans unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
  },
  {
    image: require('../assets/movie2.jpg'),
    title: 'Orphan: First Kill',
    time: '1:37 hours',
    type: 'Horror',
    description:
      'After orchestrating a brilliant escape from an Estonian psychiatric facility, Esther travels to America by impersonating the missing daughter of a wealthy family. Yet, an unexpected twist arises that pits her against a mother who will protect her family from the murderous "child" at any cost.',
  },
  {
    image: require('../assets/movie3.jpg'),
    title: 'After Ever Happy',
    time: '1:57 hours',
    type: 'Drama',
    description:
      'As a shocking truth about a couples families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met... Read all.',
  },
  {
    image: require('../assets/movie4.jpg'),
    title: 'The Man from Toronto',
    time: '3:21 hours',
    type: 'Comedy',
    description:
      'A case of mistaken identity arises after a screw-up sales consultant and the worlds deadliest assassin--known only as The Man from Toronto--run into each other at a holiday rental.',
  },
];
export const MyMovieList = ({
  navigation,
}: StackScreenProps<CinemaRouteProps, CinemaRoutes.List>) => {
  const Navi = (item: moviedata) => {
    navigation.navigate(CinemaRoutes.Detailed, {...item});
  };
  useEffect(() => {
    console.log('aaa');
  }, [Navi]);
  const renderItem = ({item}: ListRenderItemInfo<moviedata>) => (
    <MyMovieCard item={item} onPress={() => Navi(item)} />
  );
  return (
    <FlatList
      data={date}
      renderItem={renderItem}
      style={{backgroundColor: '#200423'}}
    />
  );
};
