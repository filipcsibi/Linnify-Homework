import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabRoutes} from '../routes/top_tab_routes';
import {View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  const renderListTab = () => (
    <View
      style={{
        backgroundColor: 'lightblue',
        width: 50,
        height: 50,
      }}
    />
  );

  const renderGridTab = () => (
    <View
      style={{
        backgroundColor: 'lightgray',
        width: 50,
        height: 50,
      }}
    />
  );
  return (
    <Tab.Navigator>
      <Tab.Screen name={TopTabRoutes.List} component={renderListTab} />
      <Tab.Screen name={TopTabRoutes.Grid} component={renderGridTab} />
    </Tab.Navigator>
  );
};
