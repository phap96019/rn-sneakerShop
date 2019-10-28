import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const styles = StyleSheet.create({
  avatarContainer: {
    // justifyContent: "center",
    alignItems: 'center',
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  ButtonContainer: {
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: "center",
    paddingHorizontal: 15,
  },
});

const AccountScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ ios: 80, android: 80 })}
        behavior="padding"
        style={styles.container}
      >
        <View>
          <TouchableOpacity
            style={styles.avatarContainer}
            // onPress={{ ChangeAvatar }}
          >
            <Image
              style={styles.avatar}
              source={{
                uri:
                  'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171',
              }}
            />
          </TouchableOpacity>
          <View style={styles.NameAndMail}>
            <InputComponent label="Name" autoCorrect autoCapitalize="none" />
            <InputComponent label="Phone number" autoCorrect autoCapitalize="none" />
            <InputComponent label="Address" autoCorrect autoCapitalize="none" />
            {/* <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={"#2f3542"}
              onPress={Keyboard.dismiss}
              //onPress={(value) => {this.setState({value:value})}}
            /> */}
          </View>

          <View style={styles.ButtonContainer}>
            <ButtonComponent
              activeOpacity={0.8}
              containerStyle={{ marginTop: 20, flex: 1 }}
              title="Save"
              handleOnPress={() => {}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AccountScreen;
