/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  FlatList,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {MyPressable} from './src/components/easyPressable';
import {MySroll} from './src/components/easyScroll';
import {MyButton} from './src/components/button1';
import {MyButton2} from './src/components/button2';
import {MyMathButton} from './src/components/MathButton';
import {soto, soto2} from './src/types/MyPressable.intefrace';
import {MyList} from './src/components/easyFlatList';
import {MyLogin} from './src/components/easyLogin';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/components/navigation/navigators/app-navigator';
import {BottomTabs} from './src/components/navigation/navigators/tab-navigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
