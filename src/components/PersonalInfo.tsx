import {useState} from 'react';
import {ImageBackground, Pressable, StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native';

export interface MyPersonalInfoProps {
  isValid: boolean;
  isValid2: boolean;
  incorrectBg: string;
  incorrectBg2: string;
  firstName: string;
  lastName: string;
  changeFirstName: (value: string) => void;
  changeLastName: (value: string) => void;
}

export const MyPersonalInfo = (props: MyPersonalInfoProps) => {
  const bg = require('../assets/bg1.jpg');
  return (
    <ImageBackground style={styles.main} source={bg} imageStyle={styles.img}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.txt}>First Name:</Text>
        <TextInput
          style={[styles.textinput, {backgroundColor: props.incorrectBg}]}
          onChangeText={props.changeFirstName}>
          {props.firstName}
        </TextInput>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.txt}>Last Name:</Text>
        <TextInput
          style={[styles.textinput, {backgroundColor: props.incorrectBg2}]}
          onChangeText={props.changeLastName}>
          {props.lastName}
        </TextInput>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    height: '30%',
    borderRadius: 20,
    margin: 30,
    gap: 20,
  },
  textinput: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  img: {height: '100%', width: '100%', borderRadius: 20},
  txt: {color: 'white', fontSize: 20, fontWeight: 'bold'},
});
