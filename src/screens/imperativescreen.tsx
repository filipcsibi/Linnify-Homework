import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MyPersonalInfo, MyPersonalInfoProps} from '../components/PersonalInfo';
import {MyStudentInfo} from '../components/StudentInfo';
import {useEffect, useRef, useState} from 'react';
import {useDebounce} from '../hooks/use-debounce.hook';
import {MyPersonalInfoImp} from '../components/PersonalInfoImp';
import {MyStudentInfoImp} from '../components/StudentInfoImp';

export interface PersonalScreenRef {
  getData: () => {
    firstName: string;
    lastName: string;
  };
  setBackground?: (val: string) => void;
  setBackground2: (val: string) => void;
}
export interface StudentScreenRef {
  getData: () => {
    faculty: string;
    year: string;
  };
  setBackground: (val: string) => void;
  setBackground2: (val: string) => void;
}

export const MyImperativeScreen = () => {
  const personalScreenRef = useRef<PersonalScreenRef>(null);
  const studentScreenRef = useRef<StudentScreenRef>(null);
  const bg = require('../assets/bg3.jpg');

  const onPress = () => {
    if (personalScreenRef.current?.getData().firstName === '') {
      personalScreenRef.current?.setBackground &&
        personalScreenRef.current?.setBackground('red');
      console.log('please fill in the first name');
    }
    if (personalScreenRef.current?.getData().lastName === '') {
      personalScreenRef.current?.setBackground2('red');
      console.log('please fill in the last name');
    }
    if (studentScreenRef.current?.getData().faculty === '') {
      studentScreenRef.current?.setBackground('red');
      console.log('please fill in the faculty');
    }
    if (studentScreenRef.current?.getData().year === '') {
      studentScreenRef.current?.setBackground2('red');
      console.log('please fill in the year');
    }
    // if (screenRef.current?.getData().firstName === '') {
    //   screenRef.current?.setBackground('red');
    //   console.log('please fill in the first name');
    // }
    // if (screenRef.current?.getData().lastName === '') {
    //   screenRef.current?.setBackground('red');
    //   console.log('please fill in the last name');
    // }
    // if (screenRef.current?.getData().faculty === '') {
    //   screenRef.current?.setBackground3('red');
    //   console.log('please fill in the faculty');
    // }
    // if (screenRef.current?.getData().year === '') {
    //   screenRef.current?.setBackground4('red');
    //   console.log('please fill in the year');
    // }
    // console.log(studentScreenRef.current?.getData().faculty);
    // console.log(studentScreenRef.current?.getData().year);
    // console.log(personalScreenRef.current?.getData().lastName);
    // console.log(personalScreenRef.current?.getData().firstName);
  };

  return (
    <ImageBackground source={bg} style={{flex: 1, paddingTop: 40}}>
      <Text style={styles.title}>Register Here!</Text>
      <MyPersonalInfoImp ref={personalScreenRef}></MyPersonalInfoImp>
      <MyStudentInfoImp ref={studentScreenRef}></MyStudentInfoImp>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>DONE</Text>
      </Pressable>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: '#CA6729',
    height: '10%',
    width: '40%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
  },
});
