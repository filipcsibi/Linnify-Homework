import {ForwardedRef, forwardRef, useState, useImperativeHandle} from 'react';
import {ImageBackground, Pressable, StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native';
import {impProps} from './PersonalInfoImp';
import {StudentScreenRef} from '../screens/imperativescreen';
export const MyStudentInfoImp = forwardRef(
  (props: impProps, ref: ForwardedRef<StudentScreenRef>) => {
    const bg = require('../assets/bg2.jpg');
    const [faculty, setFaculty] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [incorrectBg, setIncorrectBg] = useState('white');
    const [incorrectBg2, setIncorrectBg2] = useState('white');
    useImperativeHandle(
      ref,
      (): StudentScreenRef => ({
        getData: () => ({faculty: faculty, year: year}),
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
          <Text style={styles.txt}>Faculty:</Text>
          <TextInput
            style={[styles.textinput, {backgroundColor: incorrectBg}]}
            onChangeText={setFaculty}>
            {faculty}
          </TextInput>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.txt}>Year:</Text>
          <TextInput
            style={[styles.textinput, {backgroundColor: incorrectBg2}]}
            onChangeText={setYear}>
            {year}
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
