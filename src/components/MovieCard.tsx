import {ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';
import {QuestionIcon} from '../assets/icons';
import {ArrowIcon} from '../assets/icons';
import {moviedata} from '../types/MyPressable.intefrace';
interface props {
  item: moviedata;
  onPress: () => void;
}
export const MyMovieCard = (data: props) => {
  const movie = require('../assets/movie.jpg');
  return (
    <View style={styles.card}>
      <ImageBackground
        source={data.item.image}
        style={styles.context}
        borderRadius={30}>
        <View style={styles.mainview}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{data.item.title}</Text>
          </View>
          <View style={styles.details}>
            <View>
              <Text style={styles.time}>{data.item.time}</Text>
            </View>
            <View style={styles.detailsbutton}>
              <Pressable onPress={data.onPress}>
                <ArrowIcon width={35} height={35} fill="white"></ArrowIcon>
              </Pressable>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.typecontent}>{data.item.type}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsbutton: {
    backgroundColor: '#8B0000',
    borderRadius: 340,
    color: 'white',
    padding: 15,
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  mainview: {flex: 1, padding: 20},
  typecontent: {
    opacity: 0.7,
    color: 'black',
    backgroundColor: 'lightgray',
    marginTop: 30,
    borderRadius: 20,
    width: '30%',
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 5,
  },
  time: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlignVertical: 'top',
    opacity: 0.7,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    margin: 30,
    marginBottom: 0,
    borderRadius: 35,
    borderColor: 'lightgreen',
    borderWidth: 5,
  },
  context: {
    flex: 1,
  },
  a: {},
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
