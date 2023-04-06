/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {MyPressable} from './src/components/easyPressable';
import {MySroll} from './src/components/easyScroll';
import {MyButton} from './src/components/button1';
import {MyButton2} from './src/components/button2';
import { MyMathButton } from './src/components/MathButton';
import {soto} from './src/types/MyPressable.intefrace';
const data:soto[]=[
{
  image:require('./src/assets/burger.jpg'),
  name:'titlusmecher'
},
{
  image:require('./src/assets/pizza.jpg'),
  name:'titluprost'
},
{
  image:require('./src/assets/pizza.jpg'),
  name:'r34'
},
{
  image:require('./src/assets/pizza.jpg'),
  name:'titlupros4r34r3t'
},
{
  image:require('./src/assets/pizza.jpg'),
  name:'titlupfefferost'
},
{
  image:require('./src/assets/pizza.jpg'),
  name:'titlu43fee3prost'
}
]

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onPress = (title: string) => {
    Alert.alert(title, 'Nu mai apasa frumosule', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const renderItem = ({item}: ListRenderItemInfo<soto>)=> <MyPressable item={item} onPress={() => onPress(item.name)}/>
  const [sum, setSum] = useState(0);

  const onAddToSum = (val: number) => {
    setSum(sum+val)
  }
  const reset=()=>{
    setSum(0)
  }

  return (
  <SafeAreaView style={{flex:1,flexDirection:'column',top:'30%'}}>
    <View style={styles.butonindexare}>
      <MyMathButton nume={1} onPress={onAddToSum}></MyMathButton>
      <MyMathButton nume={2} onPress={onAddToSum}></MyMathButton>
          </View>
    <View style={{alignItems:'center'}}>
      <View style={{backgroundColor:'white',width:50,height:50 ,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'black',fontSize:30}}>{sum}</Text>
      </View>
    </View>
    <View style={styles.butonindexare}>
    <MyMathButton nume={3} onPress={onAddToSum}></MyMathButton>
    <MyMathButton nume={4} onPress={onAddToSum}></MyMathButton>

    </View>
    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Pressable style={{backgroundColor:'red',width:80,height:60,justifyContent:'center',marginTop:20,borderRadius:20}} onPress={reset}>
      <Text style={{fontSize:20}}> RESET</Text>

    </Pressable>
</View>
  {/* <FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item:soto)=>item.name}
  ListEmptyComponent={<View style={{top:100}}><Text>NIMIC</Text></View>}
  ListFooterComponent={<View style={{backgroundColor:'blue'}}><Text>FOOTER </Text></View>}
  ListHeaderComponent={<View style={{backgroundColor:'red'}}><Text>HEADER</Text></View>}
  ItemSeparatorComponent={()=><View style={{backgroundColor:'magenta'}}><Text>ssssssssdsdsddds</Text></View>}
  /> */}
  </SafeAreaView>
)

}

const obj = {
  name: 'sasdaw',
  image: require('./src/assets/pizza.jpg'),
};


const styles = StyleSheet.create({
  butonindexare:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
