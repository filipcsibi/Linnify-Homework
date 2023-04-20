import {ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';
interface Props {
  onPress: () => void;
}
export const StartPage = (props: Props) => {
  const frontpa = require('../assets/222.jpg');
  return (
    <ImageBackground source={frontpa} style={style.container}>
      <Animatable.View animation="slideInDown">
        <Text style={style.first}>Hi there!</Text>
      </Animatable.View>
      <View style={style.da}>
        <Animatable.View animation="slideInUp" duration={2000}>
          <Text style={style.second}>Are you ready?</Text>
        </Animatable.View>
        <Animatable.View animation="slideInUp" duration={3000}>
          <Pressable style={style.button} onPress={props.onPress}>
            <Text style={style.text}>START</Text>
          </Pressable>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  da: {
    backgroundColor: '#0C6507',
    width: '100%',
    height: '50%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    opacity: 0.6,
  },
  container: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  first: {fontSize: 80, color: 'white', fontWeight: '600', marginTop: 300},
  second: {fontSize: 30, color: 'white', margin: 30},
  button: {
    backgroundColor: 'green',
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: 'white'},
});
