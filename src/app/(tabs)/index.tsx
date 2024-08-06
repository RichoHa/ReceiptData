import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors';
import asset from '../../../src/data/asset';

//Get 
const myAsset = asset;

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {asset.map((e)=>{
        return <Text style={styles.title}>{e.Area}</Text>
      })}
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
