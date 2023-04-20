import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pressable, Text, View} from 'react-native';
import {Home} from '../../../screens/home';
import {Login} from '../../../screens/login';
import {AppRouteProps, AppRoutes} from '../routes/app_routes';
import {HomeIcon} from '../../../assets/icons';
import {BottomTabs} from './tab-navigator';
const Stack = createStackNavigator<AppRouteProps>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.Login}
        component={Login}
        options={({navigation, route}) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('loginscreen')}>
              <HomeIcon width={40} height={40} />
            </Pressable>
          ),
        })}></Stack.Screen>
      <Stack.Screen
        options={({navigation, route}) => ({
          title: route.params?.title,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: 'yellow',
                width: 50,
                height: 50,
              }}></Pressable>
          ),
        })}
        name={AppRoutes.Home}
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
};
