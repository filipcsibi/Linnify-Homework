import {
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {moviedata} from '../types/MyPressable.intefrace';
import {StackScreenProps} from '@react-navigation/stack';
import {
  CinemaRouteProps,
  CinemaRoutes,
} from './navigation/routes/cinema_routes';

export const MyMovieDetails = (
  props: StackScreenProps<CinemaRouteProps, CinemaRoutes.Detailed>,
) => {
  return (
    <View style={styles.main}>
      <View
        style={{
          maxHeight: '55%',
          maxWidth: '100%',
        }}>
        <Image source={props.route.params.image} style={styles.one}></Image>
      </View>
      <View style={styles.two}>
        <View style={{marginBottom: 5}}>
          <Text style={styles.title}>{props.route.params.title}</Text>
        </View>
        <View>
          <Text style={styles.three}>{props.route.params.type}</Text>
        </View>
        <View>
          <Text style={styles.three}>Time:{props.route.params.time}</Text>
        </View>
        <View>
          <Text style={styles.four}>{props.route.params.description}</Text>
        </View>
      </View>
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
