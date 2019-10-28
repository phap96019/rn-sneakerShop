import React from 'react';
import * as Expo from 'expo';
import RootStackNavigator from './navigation/RootStackNavigator';
import { setNavigator } from './utils/navigationRef';
import { Provider as AuthProvider } from './context/AuthContext';

const prefix = Expo.Linking.makeUrl('/');
export default function App() {
  console.log(prefix);
  return (
    <AuthProvider>
      <RootStackNavigator
        uriPrefix={prefix}
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
}
