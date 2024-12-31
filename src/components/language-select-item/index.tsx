import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface IProps {
    title?: string,
    onPress?: () => void, 
}

const LanguageSelectItem: React.FC<IProps> = ({title, onPress}) => {

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={onPress}
    >
        <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default LanguageSelectItem