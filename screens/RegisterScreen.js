import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EyeIcon } from "react-native-heroicons/solid";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonsData = [
  {
    id: "1",
    label: "Male",
    value: "Male",
  },
  {
    id: "2",
    label: "Female",
    value: "Female",
  },
];
function RegisterScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <SafeAreaView className="bg-[#31aa5230] flex-1 items-center pt-10 px-5">
      <View className="flex-[0.2] justify-center text-black">
        <Text className="uppercase font-bold text-3xl text-black">
          Register
        </Text>
      </View>
      <View className="w-full flex-[0.3] justify-around">
        <TextInput
          className="p-3 bg-[#c4c4c44d] text-xl h-16"
          placeholder="Name"
        ></TextInput>
        <TextInput
          className="p-3 bg-[#c4c4c44d] text-xl h-16"
          placeholder="Phone"
        ></TextInput>
        <TextInput
          className="p-3 bg-[#c4c4c44d] text-xl h-16"
          placeholder="Email"
        ></TextInput>
        <View className="bg-[#c4c4c44d] pr-2 flex flex-row justify-between items-center">
          <TextInput
            secureTextEntry={true}
            className="p-3 text-xl "
            placeholder="Password"
          ></TextInput>
          <EyeIcon color={"black"} fontSize="30px" />
        </View>
        <TextInput
          className="p-3 bg-[#c4c4c44d] text-xl h-16"
          placeholder="Birthday"
        ></TextInput>
        <View className="flex-row items-start">
          <RadioGroup
            layout="row"
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />
        </View>
      </View>
      <View className="justify-evenly items-center w-[450px] flex-[0.1]">
        <TouchableOpacity className="bg-red-600 w-[330px] h-[45px] justify-center items-center">
          <Text className="font-bold text-white text-xl uppercase">
            Register
          </Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
