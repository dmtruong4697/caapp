import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { scale } from '../../styles/scale';

interface IProps {
}

const LoadingOverlay: React.FC<IProps> = ({}) => {

  return (
    <View style={styles.viewContainer}>
        <ActivityIndicator size={scale(40)} color={colors.PrimaryColor}/>
    </View>
  )
}

export default LoadingOverlay