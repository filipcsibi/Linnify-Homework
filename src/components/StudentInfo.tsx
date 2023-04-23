import {ImageBackground, StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native';
import {MyPersonalInfoProps} from './PersonalInfo';

export const MyStudentInfo = (props: MyPersonalInfoProps) => {
  const bg = require('../assets/bg2.jpg');
  return (
    <ImageBackground style={styles.main} source={bg} imageStyle={styles.img}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.txt}>Faculty:</Text>
        <TextInput
          onChangeText={props.changeFirstName}
          style={[styles.textinput, {backgroundColor: props.incorrectBg}]}>
          {props.firstName}
        </TextInput>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.txt}>Year:</Text>
        <TextInput
          onChangeText={props.changeLastName}
          style={[styles.textinput, {backgroundColor: props.incorrectBg2}]}>
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
