import {StackScreenProps} from '@react-navigation/stack';
import {StartPage} from '../components/beginning';
import {IslandRoutesProps} from '../components/navigation/routes/island_routes';
import {AppRoutes} from '../components/navigation/routes/app_routes';
import {
  CinemaRouteProps,
  CinemaRoutes,
} from '../components/navigation/routes/cinema_routes';

export const Frontez = (
  props: StackScreenProps<CinemaRouteProps, CinemaRoutes.Main>,
) => {
  const onPress = () => props.navigation.navigate(CinemaRoutes.Bottom);
  return <StartPage onPress={onPress}></StartPage>;
};
