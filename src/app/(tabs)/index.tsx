import { StyleSheet, View, Text, FlatList, Button} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import asset from '../../../src/data/asset';

const App = () => {

// Get all unique Area into an array.
// 1. asset.map((item) => item.Area): Extracts the Area field from each object in the asset array, resulting in an array of areas.
// 2. new Set(...): Creates a new Set object from the array of areas. A Set automatically removes duplicates.
// 3. [...new Set(...)]: Spreads the Set object into a new array, resulting in an array of unique areas.
const areaArray = asset.map((item)=>item.Area); // My Desk Space,My Desk Space,My Desk Space,My Garage,My Garage,Kitchen
const areaObjectUnique = new Set(areaArray); // {'My Desk Space', 'My Garage', 'Kitchen'}
const areaUniqueArray = [...areaObjectUnique]; // My Desk Space,My Garage,Kitchen

  //Set useState --> Depending on the string or what is pressed, this will return a true or false.
  //[key: string]: boolean means the object can have any string key, and each key's value will be a boolean.
  const [expandedAreas, setExpandedAreas] = useState<{ [key: string]: boolean }>({});
  


  const handleAreaPress = (area: string) => {
    setExpandedAreas((prevExpandedAreas) => ({
      ...prevExpandedAreas,
      [area]: !prevExpandedAreas[area],
    }));
  };

  return (
    <FlatList 
      data={areaUniqueArray}
      renderItem={({ item }) => (
        <View>
          <Button title ={item} onPress={() => handleAreaPress(item)}/>
          {expandedAreas[item] && (
            <FlatList
              data={asset.filter((asset) => asset.Area === item)}
              renderItem={({ item }) => (
                <Text style={styles.text}>{item.name}</Text>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      )}
      keyExtractor={(item) => item}
    />
  );
};


export default App;

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
