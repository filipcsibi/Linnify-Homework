import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TextInput,
  Pressable,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';

export const MyButton2 = () => {
  const [pressed, setPressed] = useState(false);

  const onPress = (a: string) => {
    console.log(a);
  };
  const pressIN = () => {
    setPressed(true);
  };
  const pressOUT = () => {
    setPressed(false);
    console.log('pressout');
  };
  const dog = require('../assets/pizza.jpg');
  const soto = () => {
    console.log('soto');
  };
  return (
    <TouchableOpacity
      onPressIn={pressIN}
      onPressOut={pressOUT}
      activeOpacity={1}
      onPress={soto}
      style={{
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        borderRadius: 20,
        opacity: pressed ? 0.7 : 1,
      }}>
      <Image source={dog} style={{width: 50, height: 50}}></Image>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
        Pizza
      </Text>
    </TouchableOpacity>
  );
};
