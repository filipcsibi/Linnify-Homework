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
import {useEffect, useState} from 'react';
import {useDebounce} from '../hooks/use-debounce.hook';

export const MyNormalScreen = () => {
  const bg = require('../assets/bg3.jpg');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isValid2, setIsValid2] = useState<boolean>(false);
  const [incorrectBg, setIncorrectBg] = useState<string>('white');
  const [incorrectBg2, setIncorrectBg2] = useState<string>('white');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const changeFirstName = (value: string) => {
    setFirstName(value);
  };
  const changeLastName = (value: string) => {
    setLastName(value);
  };

  useEffect(() => {
    setIsValid(firstName.length > 0);
    setIsValid2(lastName.length > 0);
  }, [firstName, lastName]);

  const valid = () => {
    if (!isValid) {
      setIncorrectBg('red');
    }
    if (!isValid2) {
      setIncorrectBg2('red');
    }
    if (!isValid || !isValid2) {
      Alert.alert('Please fill in the form.');
    }
  };

  const [isValid3, setIsValid3] = useState<boolean>(false);
  const [isValid4, setIsValid4] = useState<boolean>(false);
  const [incorrectBg3, setIncorrectBg3] = useState<string>('white');
  const [incorrectBg4, setIncorrectBg4] = useState<string>('white');
  const [faculty, setFaculty] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const changefFaculty = (value: string) => {
    setFaculty(value);
  };
  const changeYear = (value: string) => {
    setYear(value);
  };

  useEffect(() => {
    setIsValid3(faculty.length > 0);
    setIsValid4(year.length > 0);
  }, [faculty, year]);

  const valid2 = () => {
    if (!isValid3) {
      setIncorrectBg3('red');
    }
    if (!isValid4) {
      setIncorrectBg4('red');
    }
    if (!isValid3 || !isValid4) {
      Alert.alert('Please fill in the form.');
    }
  };

  const validare = () => {
    valid();
    valid2();
    if (isValid && isValid2 && isValid3 && isValid4) {
      Alert.alert(
        'You are registered!',
        firstName + ' ' + lastName + ' ' + faculty + ' ' + year,
      );
    }
  };
  return (
    <ImageBackground source={bg} style={{flex: 1, paddingTop: 40}}>
      <Text style={styles.title}>Register Here!</Text>
      <MyPersonalInfo
        isValid={isValid}
        isValid2={isValid2}
        incorrectBg={incorrectBg}
        incorrectBg2={incorrectBg2}
        firstName={firstName}
        lastName={lastName}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
      />
      <MyStudentInfo
        isValid={isValid3}
        isValid2={isValid4}
        incorrectBg={incorrectBg3}
        incorrectBg2={incorrectBg4}
        firstName={faculty}
        lastName={year}
        changeFirstName={changefFaculty}
        changeLastName={changeYear}
      />
      <Pressable style={styles.button} onPress={validare}>
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
