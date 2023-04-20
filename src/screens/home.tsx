import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {MyLogin} from '../components/easyLogin';
import {MyList} from '../components/easyFlatList';
import {soto2} from '../types/MyPressable.intefrace';
import {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {TabRoutesProps} from '../components/navigation/routes/tab_routes';
const date: soto2[] = [
  {
    image: require('../assets/1.jpg'),
    name: 'France',
    description:
      'France , officially the French Republic , is a country located primarily in Western Europe. ',
    img: require('../assets/like.png'),
  },
  {
    image: require('../assets/2.jpg'),
    name: 'Budapest',
    description: 'Budapest is the capital and most populous city of Hungary.',
    img: require('../assets/like.png'),
  },
  {
    image: require('../assets/3.jpg'),
    name: 'Berlin',
    description:
      'Berlin is the capital and largest city of Germany by both area',
    img: require('../assets/like.png'),
  },
  {
    image: require('../assets/4.jpg'),
    name: 'NewYork',
    description: 'New York is the most populous city in the United States.',
    img: require('../assets/like.png'),
  },
];
export const Home = () => {
  const BookListItem = ({item}: ListRenderItemInfo<soto2>) => (
    <MyList item={item} onPress={addFavorite}></MyList>
  );
  const [favorite, setFavorite] = useState(0);

  const addFavorite = (value: number) => {
    setFavorite(favorite + value);
  };
  return (
    <SafeAreaView>
      <FlatList
        style={{backgroundColor: 'lightgray'}}
        data={date}
        renderItem={BookListItem}
        ListHeaderComponent={
          <View style={{margin: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              My Posts:
            </Text>
          </View>
        }
        ListEmptyComponent={<Text>NULL</Text>}
        ListHeaderComponentStyle={{
          backgroundColor: 'white',
        }}
        ListFooterComponentStyle={{
          backgroundColor: 'white',
        }}
        ListFooterComponent={
          <View
            style={{
              margin: 30,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                Favorites:
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 30, color: 'green'}}>{favorite}</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};
