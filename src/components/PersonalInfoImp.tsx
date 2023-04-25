import {ForwardedRef, forwardRef, useState, useImperativeHandle} from 'react';
import {ImageBackground, Pressable, StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native';
import {PersonalScreenRef} from '../screens/imperativescreen';

export interface impProps {}
export const MyPersonalInfoImp = forwardRef(
  (props: impProps, ref: ForwardedRef<PersonalScreenRef>) => {
    const bg = require('../assets/bg1.jpg');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [incorrectBg, setIncorrectBg] = useState('white');
    const [incorrectBg2, setIncorrectBg2] = useState('white');
    useImperativeHandle(
      ref,
      (): PersonalScreenRef => ({
        getData: () => ({firstName: firstName, lastName: lastName}),
        setBackground: (bg: string) => {
          setIncorrectBg(bg);
        },
        setBackground2: (bg: string) => {
          setIncorrectBg2(bg);
        },
      }),
    );
    return (
      <ImageBackground style={styles.main} source={bg} imageStyle={styles.img}>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.txt}>First Name:</Text>
          <TextInput
            style={[styles.textinput, {backgroundColor: incorrectBg}]}
            onChangeText={setFirstName}>
            {firstName}
          </TextInput>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.txt}>Last Name:</Text>
          <TextInput
            style={[styles.textinput, {backgroundColor: incorrectBg2}]}
            onChangeText={setLastName}>
            {lastName}
          </TextInput>
        </View>
      </ImageBackground>
    );
  },
);
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
