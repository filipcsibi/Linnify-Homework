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
import {MyMovieList} from './src/components/MovieList';
import {MyMovieCard} from './src/components/MovieCard';
import {CinemaNavigator} from './src/components/navigation/navigators/cinema-navgator';
import {IslandNavigator} from './src/components/navigation/navigators/island-navigator';
import {StartPage} from './src/components/beginning';
import {MyMovieDetails} from './src/components/MovieDetails';
import {Abc} from './src/screens/loginscreen';
import {MyPersonalInfo} from './src/components/PersonalInfo';
import {MyNormalScreen} from './src/screens/normalscreen';
import {MyImperativeScreen} from './src/screens/imperativescreen';
import {MySearchBar} from './src/components/easySearchBar';
function App(): JSX.Element {
  const ab = () => {
    console.log('hello');
  };
  return (
    //<MyImperativeScreen></MyImperativeScreen>
    // <Abc></Abc>
    //<MyNormalScreen></MyNormalScreen>
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <CinemaNavigator></CinemaNavigator>
      </NavigationContainer>
    </SafeAreaView>
    //<MyLogin onPress={ab}></MyLogin>
    //<LoginScreen></LoginScreen>
  );
}

const styles = StyleSheet.create({});

export default App;
