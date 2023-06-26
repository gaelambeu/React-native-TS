import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native-stack';
import { useState } from 'react';
import { NoteTakingInput } from './components/NoteTakingInput';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [shouldCreateNewNote, setShouldCreateNewNote] = 
    useState<boolean>(false);
  
  const saveNote = async (text: string) => {
    await AsyncStorage.setItem('note', text);
    setShouldCreateNewNote(false);
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New Note" component={NoteTakingInput} />
        {/* <View style={styles.container}>
          
          {shouldCreateNewNote ? (
          <NoteTakingInput saveNote={saveNote} />
          ) : (
            <HomeScreen toggleNewNote={setShouldCreateNewNote} />
          )}
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
