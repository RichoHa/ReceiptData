import { StyleSheet, View, Text, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import asset from '../../../src/data/asset';

// Get all the Area fields only if the field is unique.
// 1. asset.map((item) => item.Area): Extracts the Area field from each object in the asset array, resulting in an array of areas.
// 2. new Set(...): Creates a new Set object from the array of areas. A Set automatically removes duplicates.
// 3. [...new Set(...)]: Spreads the Set object into a new array, resulting in an array of unique areas.
const uniqueAreas = [...new Set(asset.map((item) => item.Area))]

// FlatList Breakdown
// 1. Data: This is the array of items to be displayed in the list.
// 2. RenderItem: This is a function that returns a component to render for each item in the data array.
// 3. KeyExtractor: This is a function that extracts a unique key for each item in the data array.

// Other way of doing it is:
// {uniqueAreas.map((area) => (
//   <Text key={area} style={styles.title}>{area}</Text>
// ))}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      <FlatList
      data={uniqueAreas}

      renderItem={({item})=>(
        <Text style={styles.title}>{item}</Text>
      )}
      keyExtractor={(item)=>item}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontWeight:'600',
    fontSize:12,
    marginVertical:10,
    color: Colors.light.tint,
  },
});
