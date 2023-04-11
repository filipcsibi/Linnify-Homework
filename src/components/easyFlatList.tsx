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
import {soto2} from '../types/MyPressable.intefrace';
import {useState} from 'react';
interface props {
  item: soto2;
  onPress: () => void;
}
export const MyList = (dates: props) => {
  const onPress = () => dates.onPress();
  const [imaj, setImaj] = useState(require('../assets/like.png'));
  const unfilled = require('../assets/like.png');
  const like = () => {
    setImaj(require('../assets/heart.png'));
    onPress();
  };
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        maxHeight: 200,
        backgroundColor: 'white',
        borderRadius: 40,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, alignItems: 'center', margin: 20}}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#BEC44C',
              fontSize: 20,
              fontWeight: '900',
              paddingRight: 20,
            }}>
            {dates.item.name}
          </Text>
          <Pressable onPress={like}>
            <Image
              source={imaj}
              style={{
                justifyContent: 'flex-end',
                height: 30,
                width: 30,
              }}></Image>
          </Pressable>
        </View>
        <View style={{flex: 0.7}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              alignSelf: 'flex-start',
              paddingBottom: 10,
              fontWeight: '500',
            }}>
            Description:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              flex: 1,
            }}>
            {dates.item.description}
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Image
          source={dates.item.image}
          style={{
            width: '100%',
            height: '100%',
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}></Image>
      </View>
    </View>
  );
};
