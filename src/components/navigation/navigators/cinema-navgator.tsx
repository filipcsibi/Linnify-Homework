import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {CinemaRouteProps, CinemaRoutes} from '../routes/cinema_routes';
import {IslandNavigator} from './island-navigator';
import {StartPage} from '../../beginning';
import {Frontez} from '../../../screens/frontpage';
import {MyMovieList} from '../../MovieList';
import {MyMovieDetails} from '../../MovieDetails';
const Cinema = createStackNavigator<CinemaRouteProps>();
export const CinemaNavigator = () => {
  return (
    <Cinema.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}>
      <Cinema.Screen
        name={CinemaRoutes.Main}
        component={Frontez}></Cinema.Screen>

      <Cinema.Screen
        name={CinemaRoutes.Bottom}
        component={IslandNavigator}></Cinema.Screen>

      <Cinema.Screen
        options={{
          headerShown: false,
          headerTitle: 'My Movie List',
          headerStyle: {height: 70},
          headerTitleStyle: {color: 'green'},
          headerTitleAlign: 'center',
        }}
        name={CinemaRoutes.List}
        component={MyMovieList}></Cinema.Screen>

      <Cinema.Screen
        name={CinemaRoutes.Detailed}
        component={MyMovieDetails}></Cinema.Screen>
    </Cinema.Navigator>
  );
};
