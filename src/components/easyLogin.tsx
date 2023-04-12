import {useState} from 'react';
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
  Image,
  TextInput,
} from 'react-native';
interface Props{
  onPress:()=>void;
}
export const MyLogin = (props:Props) => {
  const icoana = require('../assets/logo.jpeg');
  const eye = require('../assets/eye.png');
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [inputValue2, setInputValue2] = useState('');
  const handlePasswordChange = (text: string) => {
    setInputValue2(text);
  };
  const handleEmailChange = (text: string) => {
    setInputValue(text);
    setIsValid(text.trim().length > 0);
  };
  const handlePress = () => {
    Alert.alert(`${inputValue}`, `The password is ${inputValue2}`);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#5BD547'}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          margin: 50,
          marginVertical: 200,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <View style={{paddingTop: 30}}>
          <Image source={icoana} style={{width: 100, height: 100,borderRadius:50}}></Image>
        </View>
        <View style={{width: '90%', paddingTop: 10}}>
          <Text style={{}} onPress={props.onPress}>Email:</Text>
          <TextInput
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            style={{
              backgroundColor: 'lightgray',
              borderRadius: 10,
              height:30
            }}></TextInput>
        </View>
        <View style={{width: '90%', paddingTop: 10}}>
          <Text style={{}}>Password:</Text>
          <View
            style={{
              backgroundColor: 'lightgray',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              secureTextEntry={true}
              style={{width: '90%',height:30}}
              onChangeText={handlePasswordChange}></TextInput>
            <Image
              source={eye}
              style={{width: 20, height: 20, marginRight: 10}}></Image>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#5BD547',
            width: '30%',
            height: '12%',
            marginTop: 30,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={handlePress} disabled={!isValid}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
