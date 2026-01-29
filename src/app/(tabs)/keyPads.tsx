import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const KeyPadScreen = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Link href="/(auth)">Go to Login</Link>
      <Link href="/(auth)/sign-up">Go to Sign up</Link>
    </View>
  )
}

export default KeyPadScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})