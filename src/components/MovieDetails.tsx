import {
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {moviedata} from '../types/MyPressable.intefrace';
import {StackScreenProps} from '@react-navigation/stack';
import {
  CinemaRouteProps,
  CinemaRoutes,
} from './navigation/routes/cinema_routes';
import {TextCompDetails} from './detailscomp';
import {useRef, useState} from 'react';
export interface TextCompDetailsRef {
  changeTextBackground: (value: string) => void;
}
export const MyMovieDetails = (
  props: StackScreenProps<CinemaRouteProps, CinemaRoutes.Detailed>,
) => {
  const textComponentRef = useRef<TextCompDetailsRef>(null);
  const onPress = () => {
    textComponentRef.current?.changeTextBackground('red');
  };
  return (
    <View style={styles.main}>
      <View
        style={{
          maxHeight: '55%',
          maxWidth: '100%',
        }}>
        <Pressable onPress={onPress}>
          <Image source={props.route.params.image} style={[styles.one]}></Image>
        </Pressable>
      </View>

      <TextCompDetails ref={textComponentRef} {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  one: {
    height: '100%',
    width: '100%',
  },
  two: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: -40,
    padding: 40,
  },
  three: {fontSize: 20, marginBottom: 5, color: 'gray'},
  four: {
    fontSize: 20,
    marginTop: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
  },
});
