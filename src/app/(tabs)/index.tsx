import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <text style={styles.title}>My Desk Space</text>
      <text style={styles.text}>My Computer</text>
      <text style={styles.text}>My Keyboard</text>
      <text style={styles.text}>My Mouse</text>
      <text style={styles.text}>My Desk</text>
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
