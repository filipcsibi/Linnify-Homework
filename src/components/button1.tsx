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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const MyButton = () => {
  const onPress = (a: string) => {
    console.log(a);
  };
  const soto = () => {
    console.log('soto');
  };
  return <Button title="Simple text" onPress={soto}></Button>;
};
