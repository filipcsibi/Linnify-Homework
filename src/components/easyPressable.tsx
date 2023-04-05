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

export const MyPressable = () => {
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
  const onPress = (a: string) => {
    console.log(a);
  };
  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={profile}
          style={{width: 50, height: 50, margin: 10, borderRadius: 30}}></Image>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Filip Csibi
        </Text>
      </View>
      <Pressable
        onPress={showAlert}
        style={{backgroundColor: 'blue', height: '50%', width: '100%'}}>
        <Image source={Dog} style={{height: '100%', width: '100%'}}></Image>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={like}>
            <AntDesign
              name="heart"
              size={45}
              color={'red'}
              style={{paddingRight: 4}}></AntDesign>
          </Pressable>
          <Pressable onPress={comment}>
            <FontAwesome name="comment" size={45} color={'gray'}></FontAwesome>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={share}>
            <FontAwesome name="share" size={45} color={'gray'}></FontAwesome>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'lightgray',
          height: '40%',
          width: '100%',
          flex: 1,
          alignItems: 'center',
          borderRadius: 30,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
          }}>
          --Comments--
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
