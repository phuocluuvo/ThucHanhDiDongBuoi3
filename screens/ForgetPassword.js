import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EnvelopeIcon } from "react-native-heroicons/outline";
const ForgetPassword = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#BDF6C6] items-center ">
      <View className="items-center flex-[0.4] justify-evenly py-10">
        <Image
          source={require("../assets/lock.png")}
          className="w-[105px] h-[117px]"
        />
        <Text className="uppercase font-bold text-3xl w-[200px] text-center">
          Forget Password
        </Text>
      </View>
      <View className="flex-[0.2] justify-around">
        <Text className="text-xl text-center font-bold ">
          Provide your account's email for which you want to reset your password
        </Text>
        <View className="bg-[#C4C4C4]  text-black flex-row items-center p-1 border-2 border-black">
          <EnvelopeIcon color="black" size="20" fontWeight="bold" />
          <TextInput placeholder="Email" className="mx-1"></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("CodeVerification");
          }}
          className="h-[45px] bg-[#E3C000] justify-center flex items-center"
        >
          <Text className=" font-bold  text-xl">NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
