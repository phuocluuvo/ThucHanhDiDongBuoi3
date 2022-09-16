import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        padding: 20,
        paddingVertical: "30px",
        background:
          "linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #28F7AC 100%)",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: 150,
          height: 150,
          border: "10px solid black",
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        GROW <br />
        YOUR BUSSINESS
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "15px",
        }}
      >
        We will have you to grown bussiness using online server
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",

          flex: 0.5,
        }}
      >
        <View
          style={{
            display: "flex",
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#E3C000",
              padding: 10,
              width: "150px",
              marginRight: 20,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E3C000",
              padding: 10,
              marginLeft: 20,
              width: "150px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            flex: 0.5,
          }}
        >
          HOW WE WORK?
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
