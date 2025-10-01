import React from 'react'
import { Text, View } from 'react-native'

const Divider = () => {
  return (
    <View className="mt-10 items-center flex-row">
      <View className="flex-1 h-[1px] bg-[#283618]" />
      <Text className="mx-2 text-text-highlight">OR</Text>
      <View className="flex-1 h-[1px] bg-[#283618]" />
    </View>
  )
}

export default Divider