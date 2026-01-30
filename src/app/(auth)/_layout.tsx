import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{headerShown: true, title: "Login",  headerStyle: {
          backgroundColor: '#dda15e',
        }}}
      />
      <Stack.Screen name="sign-up" options={{headerShown: true, title: "Sign Up" }} />
      <Stack.Screen name='forgot-password' options={{headerShown: true, title: 'Forgot Password'}} />
    </Stack>
  );
}

export default AuthLayout