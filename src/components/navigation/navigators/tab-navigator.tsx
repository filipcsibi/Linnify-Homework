import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRoutes, TabRoutesProps} from '../routes/tab_routes';
import {LogBox, Pressable, View} from 'react-native';
import {BookIcon, HomeIcon, PersonIcon} from '../../../assets/icons';
import {AppNavigator} from './app-navigator';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../routes/app_routes';
import {TopTabs} from './top-tabs-navigator';
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator<TabRoutesProps>();
export const BottomTabs = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator screenOptions={{title: 'Jmekerie'}}>
      <Tab.Screen
        name={TabRoutes.Home}
        component={() => (
          <View style={{backgroundColor: 'red', flex: 1}}></View>
        )}
        options={{
          headerShown: false,
          tabBarLabel: 'HOME',
          tabBarIcon: () => <HomeIcon width={30} height={30} />,
        }}></Tab.Screen>
      <Tab.Screen
        name={TabRoutes.Account}
        component={() => (
          <View style={{flex: 1, backgroundColor: 'blue'}}>
            <Pressable
              style={{
                backgroundColor: 'magenta',
                width: 50,
                height: 50,
              }}
              onPress={() => {
                navigation.navigate(AppRoutes.Login);
              }}></Pressable>
          </View>
        )}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: () => <PersonIcon width={30} height={30} />,
        }}></Tab.Screen>
      <Tab.Screen
        name={TabRoutes.Books}
        component={TopTabs}
        options={{
          tabBarLabel: 'REELS',
          tabBarIcon: () => <BookIcon width={30} height={30} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};
