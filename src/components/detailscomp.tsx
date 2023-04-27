import {StyleSheet, Text, View} from 'react-native';
import {
  CinemaRouteProps,
  CinemaRoutes,
} from './navigation/routes/cinema_routes';
import {StackScreenProps} from '@react-navigation/stack';
import {ForwardedRef, forwardRef, useImperativeHandle, useState} from 'react';
import {TextCompDetailsRef} from './MovieDetails';

export const TextCompDetails = forwardRef(
  (
    props: StackScreenProps<CinemaRouteProps, CinemaRoutes.Detailed>,
    ref: ForwardedRef<TextCompDetailsRef>,
  ) => {
    const [color, setColor] = useState('white');
    useImperativeHandle(
      ref,
      (): TextCompDetailsRef => ({
        changeTextBackground(value: string): void {
          setColor(value);
        },
      }),
    );
    return (
      <View style={[styles.two, {backgroundColor: color}]}>
        <View style={{marginBottom: 5}}>
          <Text style={styles.title}>{props.route.params.name}</Text>
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
    );
  },
);
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
