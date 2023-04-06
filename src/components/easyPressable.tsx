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
import {soto} from '../types/MyPressable.intefrace';
import {useState} from 'react';
interface Props {
  item: soto;
  onPress: (title: string) => void;
}

export const MyPressable = (props: Props) => {
  const [title, setTitle] = useState('123');
  const [commend, setCommend] = useState({id: 2, title: 'a534rew'});
  const showAlert = () => {
    Alert.alert('Alerta', 'Nu mai apasa frumosule', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const like = () => {
    console.log('LIKE');
  };
  const share = () => {
    console.log('SHARE');
  };
  const comment = () => {
    console.log('COMMENT');
  };
  const Dog = require('../assets/dasda.jpeg');
  const profile = require('../assets/soto.jpg');

  return (
    <Pressable
      onPress={() => setTitle('awdawd')}
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={profile}
          style={{width: 50, height: 50, margin: 10, borderRadius: 30}}></Image>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          {title}
        </Text>
      </View>
      <Pressable
        onPress={() => props.onPress('taci ma')}
        style={{backgroundColor: 'blue', height: '50%', width: '100%'}}>
        <Image
          source={props.item.image}
          style={{height: '100%', width: '100%'}}></Image>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={like}>
              <View style={{backgroundColor:'red',width:50,height:50}}></View>
          </Pressable>
          <Pressable onPress={() => setTitle('434343')}>
            <View style={{backgroundColor:'blue',width:50,height:50}}></View>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => {
              (commend.title = 'awda'),
                setCommend({...commend, title: 'awdadedd'});
            }}>
              <View style={{backgroundColor:'red'}}></View>
              <View style={{backgroundColor:'magenta',width:50,height:50}}></View>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'lightgray',
          flex: 1,
          alignItems: 'center',
          borderRadius: 30,
          margin: 30,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {commend.title}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  a: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    padding: 50,
  },
  c: {width: 50, height: 50},
  b: {backgroundColor: 'white', borderRadius: 5, color: 'red'},
  email: {
    backgroundColor: 'gray',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  soto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  abc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cutie: {
    backgroundColor: 'red',
    width: 500,
    height: 150,
    flex: 1,
  },
  cutie2: {
    backgroundColor: 'magenta',
    width: 500,
    height: 150,
    flex: 1,
  },
  cutie3: {
    backgroundColor: 'green',
    width: 500,
    height: 150,
    flex: 1,
  },
});
