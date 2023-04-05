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
  ScrollView,
} from 'react-native';

export const MySroll = () => {
  const Burger = require('../assets/burger.jpg');
  const Pizza = require('../assets/pizza.jpg');
  const Sushi = require('../assets/sushi.jpg');

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{marginBottom: 20}}>
        <View>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
            {' '}
            SUSHI
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <Image
              source={Sushi}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Sushi}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Sushi}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Sushi}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Sushi}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
        </ScrollView>
      </View>
      <View>
        <View>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
            {' '}
            PIZZA
          </Text>
        </View>
        <ScrollView horizontal={true} style={{}}>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <Image
              source={Pizza}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Pizza}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Pizza}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Pizza}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Pizza}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
        </ScrollView>
      </View>
      <View>
        <View>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
            {' '}
            BURGERS
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <Image
              source={Burger}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Burger}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Burger}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Burger}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
          <View style={{paddingRight: 10}}>
            <Image
              source={Burger}
              style={{width: 200, height: 250, borderRadius: 20}}></Image>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};
