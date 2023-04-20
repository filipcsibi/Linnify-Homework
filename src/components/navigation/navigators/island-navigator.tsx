import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IslandRoutes, IslandRoutesProps} from '../routes/island_routes';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import {
  BackIcon,
  ListIcon,
  ShieldIcon,
  StarIcon,
  SunIcon,
} from '../../../assets/icons';
import {MyMovieList} from '../../MovieList';
import {CinemaRoutes} from '../routes/cinema_routes';
import {useEffect} from 'react';
const Island = createBottomTabNavigator<IslandRoutesProps>();

export const IslandNavigator = () => {
  const icon = require('../navigators/movieicon.png');
  const icon1 = require('../navigators/nr6.jpg');
  const icon2 = require('../navigators/nr5.jpg');
  const icon3 = require('../navigators/nr3.jpg');

  const First = () => {
    useEffect(() => {
      console.log('asdaw');
    }, []);
    return <Image source={icon1} style={{height: '105%', width: '100%'}} />;
  };
  const Second = () => <Image source={icon2} style={styles.a}></Image>;
  const Third = () => <Image source={icon3} style={styles.a}></Image>;
  return (
    <Island.Navigator
      screenOptions={({navigation, route}) => ({
        headerTransparent: true,
        headerBackground: () => <View style={styles.header} />,
        headerTitle: () => <Image source={icon} style={styles.image} />,
        headerTitleAlign: 'center',
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate(CinemaRoutes.List)}>
            <ListIcon width={50} height={50} />
          </Pressable>
        ),
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <BackIcon width={50} height={50} />
          </Pressable>
        ),
        headerStyle: {height: 70},
        tabBarShowLabel: false,
        tabBarStyle: styles.island,
        tabBarActiveTintColor: 'yellow',
      })}>
      <Island.Screen
        name={IslandRoutes.Deva}
        component={First}
        options={{
          tabBarIcon: () => <StarIcon width={30} height={30} />,
        }}></Island.Screen>
      <Island.Screen
        name={IslandRoutes.Cluj}
        component={Second}
        options={{
          tabBarIcon: () => <ShieldIcon width={30} height={30} />,
        }}></Island.Screen>
      <Island.Screen
        name={IslandRoutes.Timisoara}
        component={Third}
        options={{
          tabBarIcon: () => <SunIcon width={30} height={30} />,
        }}></Island.Screen>
    </Island.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {width: 100, height: 100, margin: 10},
  header: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  island: {
    bottom: 20,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 80,
    position: 'absolute',
    opacity: 0.8,
  },
  a: {height: '100%', width: '100%'},
});
