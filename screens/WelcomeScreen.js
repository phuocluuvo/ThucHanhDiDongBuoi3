import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const WelcomeScreen = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      className="h-full w-full p-10 py-[30px] 
      items-center justify-between
      "
    >
      <View className="w-[150px] h-[150px] border-[20px] border-black rounded-[100px] " />
      <Text className="text-center font-bold text-3xl">
        GROW YOUR BUSSINESS
      </Text>
      <Text className="text-center font-bold text-xl">
        We will have you to grown bussiness using online server
      </Text>
      <View className="flex justify-between flex-[0.5]">
        <View className="flex justify-evenly flex-[0.5] items-center flex-row w-full">
          <TouchableOpacity
            className="bg-[#E3C000] py-4 w-[100px] flex justify-center items-center"
            onPress={() => {
              nav.navigate("LoginScreen");
            }}
          >
            <Text className="text-lg font-bold">LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#E3C000] py-4 w-[100px] flex justify-center items-center"
            onPress={() => {
              nav.navigate("RegisterScreen");
            }}
          >
            <Text className="text-lg font-bold">SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text className="font-bold text-lg text-center flex-[0.5]">
          HOW WE WORK?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
