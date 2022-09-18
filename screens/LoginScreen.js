import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { EyeIcon } from "react-native-heroicons/solid";

function LoginScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      className="h-full w-full p-10 py-[30px] 
      items-center justify-around bg-[#31aa5230]
      "
    >
      <Text className="text-3xl font-bold">LOGIN</Text>
      <View className="w-full flex-[0.1] justify-around">
        <TextInput
          className="p-3 bg-[#c4c4c44d] text-xl"
          placeholder="Email"
        ></TextInput>
        <View className="bg-[#c4c4c44d] pr-2 flex flex-row justify-between items-center">
          <TextInput
            secureTextEntry={true}
            className="p-3 text-xl "
            placeholder="Password"
          ></TextInput>
          <EyeIcon color={"black"} fontSize="25px" />
        </View>
      </View>
      <View className="justify-evenly items-center w-[450px] flex-[0.1]">
        <TouchableOpacity className="bg-red-600 w-[330px] h-[45px] justify-center items-center">
          <Text className="font-bold text-white text-xl ">LOGIN</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
        <TouchableOpacity onPress={() => nav.navigate("ForgetPassword")}>
          <Text className="text-indigo-800">Forgot you password?</Text>
        </TouchableOpacity>
        <Text>or login with</Text>
      </View>
      <View className="flex-row w-full flex-[0.05]">
        <TouchableOpacity className="bg-[#25479B] justify-center items-center flex-[0.333]">
          <Image source={require("../assets/f.png")} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#0F8EE0]  flex-[0.333] h-fit  justify-center items-center">
          <Text className="font-[900] text-[30px] text-white">Z</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-[#0F8EE0] border-2 flex-[0.333]  justify-center items-center">
          <Image source={require("../assets/google.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
