import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import InputField from '../components/inputs/InputField';

const ForgotPassword = () => {
  return (
    <View className="flex-1 justify-center p-10 bg-background-white">
      <View className="items-center mb-5">
        <View className="w-[100px] h-[100px] items-center justify-center border border-border-default rounded-full">
          <Ionicons size={50} name="call" color="#dda15e" />
        </View>
      </View>

      <View className="mt-10">
        <InputField placeholder=" Enter your Email" />

        <TouchableOpacity className="bg-background-primary py-5 rounded-[10px]">
          <Text className="text-center text-text-white text-lg font-bold">
            REST PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgotPassword