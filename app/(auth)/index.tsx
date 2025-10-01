import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Divider from '../components/Divider';
import InputField from '../components/inputs/InputField';
const LoginScreen = () => {
  return (
    <View className="flex-1 justify-center p-10 bg-background-white">
      <View className="items-center mb-5">
        <View className="w-[100px] h-[100px] items-center justify-center border border-border-default rounded-full">
          <Ionicons size={50} name="call" color="#dda15e" />
        </View>
      </View>

      <View className="mt-10">
        <InputField placeholder="Email" />
        <InputField placeholder="Password" secureTextEntry />

        <View className="flex items-center mb-5">
          <Link href="./forgot-password">
            <Text className="text-text-primary text-sm">Forgot Password?</Text>
          </Link>
        </View>

        <TouchableOpacity className="bg-background-primary py-5 rounded-[10px]">
          <Text className="text-center text-text-white text-lg font-bold">
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <Divider />

      <View className="flex-row gap-8 justify-center items-center mt-5">
        <View className="flex-row items-center gap-2">
          <Ionicons name="logo-google" size={40} color="" />
          <Text className="text-sm">Login with Google</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Ionicons name="logo-apple" size={40} color="" />
          <Text className="text-sm text-text-primary">Login with Apple</Text>
        </View>
      </View>

      <View>
        <Text className="text-center mt-8 text-sm text-text-primary">
          Don't have an account?{" "}
          <Link
            href="./(auth)/sign-up"
            className="text-text-highlight text-base"
          >
            Sign up
          </Link>
        </Text>
      </View>
    </View>
  );
}

export default LoginScreen