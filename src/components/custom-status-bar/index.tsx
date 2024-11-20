import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
    backgroundColor: string
}

const CustomStatusBar: React.FC<IProps> = ({backgroundColor}) => {

    const insets = useSafeAreaInsets();
    
  return (
    <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={'light-content'} />
    </View>
  )
}

export default CustomStatusBar