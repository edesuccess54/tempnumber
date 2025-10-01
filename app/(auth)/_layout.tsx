import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{headerShown: false, title: "Login"}}
      />
      <Stack.Screen name="sign-up" options={{headerShown: false, title: "Sign In" }} />
      <Stack.Screen name='forgot-password' options={{headerShown: false, title: 'Forgot Password'}} />
    </Stack>
  );
}

export default AuthLayout