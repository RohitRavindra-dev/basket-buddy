import React from 'react';
import {Text, View} from 'react-native';
import {headerStyles as hs} from './styles';
import AppLogoSVG from '../../../assets/svgs/AppIcon';

export type AppHeaderType = {
  headerTitle: string;
};
export const AppHeader = ({headerTitle}: AppHeaderType) => {
  return (
    <View style={hs.header}>
         <View style={hs.logoContainer}>
        <AppLogoSVG />
        </View>
      <View style={hs.titleIconFlex}>
     
        <Text style={hs.appTitle}>Basket Buddy</Text>
        <Text style={hs.screenTitle}>.</Text>
        <Text style={hs.screenTitle}>{headerTitle}</Text>
      </View>
    </View>
  );
};
