import React from "react";
import {Text, Button, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from "../types";
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = {
    toggleNewNote: (toggle: boolean) => void
}
export const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [noteText, setNoteText] = useState<string>('');

  useFocusEffect(() => {
    getNote().then(result => setNoteText(result ?? ""))
  })

  const getNote = async () => {
    const result = await AsyncStorage.getItem("note");
  }

    return (
        <>
          <View>
            <Text>
              {noteText}
            </Text>
          </View>
          <Button 
            onPress={() => navigation.navigate('EditNote')} 
            title="New Note"
          />
          
        </>
    )
}