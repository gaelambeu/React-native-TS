import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NoteTakingInput } from "../components/NoteTakingInput";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const EditNoteScreen: React.FC = () => {
    const saveNote = async (text: string) => {
        await AsyncStorage.setItem('note', text);
    };

    return(
        <NoteTakingInput saveNote={saveNote} />
    )
}