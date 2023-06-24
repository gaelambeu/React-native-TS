import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Slider = () => {
  return (
    <View style={styles.container}>
      <Text>I am Slider page </Text>
      <StatusBar style="auto" />
    </View>
  );
}


export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
