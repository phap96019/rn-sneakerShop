// import React from "react";
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   ImageBackground
// } from "react-native";
// import { TextField } from "react-native-material-textfield";
// import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//   }
//   fieldRef = React.createRef();

//   onSubmit = () => {
//     let { current: field } = this.fieldRef;

//     console.log(field.value());
//   };

//   formatText = text => {
//     return text.replace(/[^+\d]/g, "");
//   };

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           marginHorizontal: 15,
//           borderWidth: 10
//         }}
//       >
//         <View style={{ flex: 1 }}>
//           <TextField
//             label="Phone number"
//             keyboardType="phone-pad"
//             formatText={this.formatText}
//             onSubmitEditing={this.onSubmit}
//             ref={this.fieldRef}
//             containerStyle={{
//               position: "absolute",
//               top: 0,
//               bottom: 0,
//               left: 0,
//               right: 0
//             }}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   textA: {
//     fontSize: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center"
//   }
// });

// export default HomeScreen;

//=====================================================================

// import React from "react";
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TextInput
// } from "react-native";
// import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Image
//           source={{
//             uri:
//               "https://cdn.shopify.com/s/files/1/1431/4540/products/NIKE_Logo_AIR_Jordan_JumpMan_23_HUGE_Flight_Wall_Decal_Sticker_grande.jpg?v=1526782062"
//           }}
//           style={styles.logo}
//         />
//         <View style={{ padding: 10 }}>
//           <TextInput
//             style={{ height: 40 }}
//             placeholder="Username"
//             onChangeText={text => this.setState({ text })}
//             value={this.state.text}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   textA: {
//     fontSize: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center"
//   },
//   logo: {
//     width: 300,
//     height: 200
//     // height: Dimensions.get("window").height / 3
//   }
// });

// export default HomeScreen;
//===================================================================================
//Search Screen
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
export class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text> </Text>
          <Text> </Text>
          <View style={styles.container}>
            <Image
              style={styles.Image}
              source={{
                uri:
                  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171"
              }}
            />
            <Text style={styles.textA}>Ngọc Trinh</Text>
            <Text>trinhpro@gmail.com</Text>
          </View>
          <View style={styles.profile}>
            <TouchableOpacity style={styles.buttonEditTop}>
              <Text style={styles.buttonText}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEditBot}>
              <Text style={styles.buttonText}>Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btList}>
            <TouchableOpacity style={styles.bteasy}>
              <Ionicons name="md-reorder" size={20} color="#3d3d3d" />
              <Text style={styles.textB}> Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bteasy}>
              <Ionicons name="ios-cart" size={20} color="#3d3d3d" />
              <Text style={styles.textB}> Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bteasy}>
              <Ionicons name="ios-heart-empty" size={20} color="#3d3d3d" />
              <Text style={styles.textB}> Wish list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bteasy}>
              <Ionicons name="ios-settings" size={20} color="#3d3d3d" />
              <Text style={styles.textB}> Setting</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profile}>
            <TouchableOpacity style={styles.buttonEditBot}>
              <Text style={styles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  textA: {
    fontSize: 20,
    fontWeight: "bold"
  },
  Image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    paddingHorizontal: 10
  },
  profile: {
    marginTop: 20,
    margin: 10
  },
  buttonEditTop: {
    backgroundColor: "#95a5a6",
    paddingVertical: 13,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 5
  },
  buttonEditBot: {
    backgroundColor: "#95a5a6",
    paddingVertical: 13,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginBottom: 5
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  //các nút cơ bản phía dưới
  btList: {
    margin: 10
  },
  bteasy: {
    backgroundColor: "#ecf0f1",
    paddingVertical: 13,
    marginBottom: 5,
    paddingLeft: 15,
    flexDirection: "row"
  },
  textB: {
    textAlign: "left",
    color: "#3d3d3d"
  }
});

export default HomeScreen;
