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
export class AccountScreen extends Component {
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

export default AccountScreen;
