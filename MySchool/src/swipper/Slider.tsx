import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Btn from '../need/Btn';
import { darkGreen, green } from '../need/Constants';
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES, COLORS } from "../../modele/theme";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: number;
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Quick & Easy Payments',
    description: 'Grow your business by accepting card payments with the new card reader.',
    image: require('../../assets/images/img1.png')
  },

  {
    id: '2',
    title: 'Smart Point of Sale',
    description: 'Complete point of sale software tailored to your.',
    image: require('../../assets/images/img2.png')
  },

  {
    id: '3',
    title: 'Instant Notifications',
    description: 'Adjust your quickly see row.',
    image: require('../../assets/images/img3.png')
  },

  {
    id: '4',
    title: 'Customize Everything',
    description: 'Adjust your system to speed up your checkout.',
    image: require('../../assets/images/img4.png')
  },
];

interface IntroProps {
  navigation: any; // Replace 'any' with the type of your navigation prop
}

const Intro: React.FC<IntroProps> = (props) => {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label: string) => {
    return (
      <View style={{ padding: 8 }}>
        <Text style={{ color: COLORS.title, fontWeight: '800', fontSize: SIZES.h2 }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, alignItems: 'center', padding: 15, paddingTop: 100 }}>
              <Image
                source={item.image}
                style={{ width: SIZES.width - 80, height: 400 }}
                resizeMode="contain"
              />
              <Text style={{ fontWeight: 'bold', color: COLORS.title, fontSize: SIZES.h1 }}>{item.title}</Text>
              <Text style={{ textAlign: 'center', paddingTop: 5, color: COLORS.title }}>{item.description}</Text>

              {/* <Btn bgColor={green} textColor='white' btnLabel="Start" Press={() => props.navigation.navigate("Home")} /> */}

              <StatusBar style="auto" />
            </View>
          );
        }}

        activeDotStyle={{ backgroundColor: COLORS.primary, width: 30 }}

        renderNextButton={() => buttonLabel("Suivant")}
        renderDoneButton={() => buttonLabel("Start")}
        onDone={() => props.navigation.navigate("Home")}
      />
    );
  }

  return null;
};

const styles = StyleSheet.create({});

export default Intro;
