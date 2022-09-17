import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";

const CodeVerification = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#00CCF9] items-center ">
      <View className="h-[90%] m-[35%]">
        <View className="flex-[0.4] justify-around items-center">
          <Text className="text-[60px] font-bold text-black">CODE</Text>
          <Text className="text-xl uppercase font-bold text-black">
            Verification
          </Text>
          <Text className="text-lg font-bold text-black w-[260px] text-center">
            Enter ontime password sent on ++849092605798
          </Text>
        </View>
        <View className="flex-auto">
          <View className="flex-[0.2] flex-row">
            <View className="w-[50px] h-[50px] border-[2px] border-black"></View>
            <View className="w-[50px] h-[50px] border-[2px] border-black"></View>
            <View className="w-[50px] h-[50px] border-[2px] border-black"></View>
            <View className="w-[50px] h-[50px] border-[2px] border-black"></View>
            <View className="w-[50px] h-[50px] border-[2px] border-black"></View>
          </View>
          <TouchableOpacity className=" bg-[#E3C000]">
            <Text className="font-bold uppercase text-xl text-center p-2">
              Verify code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CodeVerification;
