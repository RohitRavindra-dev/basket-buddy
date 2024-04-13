import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { AppStack } from './src/navigation/AppStack';
import { AppTabs } from './src/navigation/AppTabs';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {

  return (
    <PaperProvider>
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
    </PaperProvider>
  );
}



export default App;
