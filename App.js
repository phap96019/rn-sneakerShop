import React from 'react';
import * as Expo from 'expo';
import RootStackNavigator from './navigation/RootStackNavigator';
import { setNavigator } from './utils/navigationRef';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as UserProvider } from './context/UserContext';
import { Provider as ProductProvider } from './context/ProductContext';
import { Provider as ReviewProvider } from './context/ReviewContext';

const prefix = Expo.Linking.makeUrl('/');
export default function App() {
  console.log(prefix);
  return (
    <AuthProvider>
      <UserProvider>
        <ReviewProvider>
          <ProductProvider>
            <RootStackNavigator
              uriPrefix={prefix}
              ref={navigator => {
                setNavigator(navigator);
              }}
            />
          </ProductProvider>
        </ReviewProvider>
      </UserProvider>
    </AuthProvider>
  );
}
