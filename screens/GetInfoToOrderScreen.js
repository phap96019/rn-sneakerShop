import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Context as UserContext } from '../context/UserContext';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';

const GetInfoToOrderScreen = props => {
  const [inputData, setInputData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const {
    user,
    error,
    loading,
    updateMe,
    getMe,
    clearError,
    setLoading,
  } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      setLoading();
      getMe();
      setInputData({ ...inputData, user });
    } else {
      const { name = '', phone = '', address = '' } = user;
      setInputData({ ...inputData, name, phone, address });
    }
  }, [user]);
  const { name, phone, address } = inputData;
  const handleOnChange = key => text => {
    setInputData({ ...inputData, [key]: text });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'space-around', padding: 15 }}>
        <View>
          <InputComponent
            label="Name"
            autoCorrect
            autoCapitalize="none"
            value={name}
            handleOnChange={handleOnChange('name')}
          />
          <InputComponent
            label="Phone number"
            autoCorrect
            autoCapitalize="none"
            value={phone}
            handleOnChange={handleOnChange('phone')}
          />
          <InputComponent
            label="Address"
            autoCorrect
            autoCapitalize="none"
            value={address}
            handleOnChange={handleOnChange('address')}
          />
        </View>
        <ButtonComponent
          activeOpacity={0.8}
          containerStyle={{ marginTop: 20 }}
          title="Confirm order"
          handleOnPress={() => {
            props.navigation.navigate('NoficationOrder');
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default GetInfoToOrderScreen;
