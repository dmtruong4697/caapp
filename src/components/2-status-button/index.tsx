import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';

interface IProps {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  rightIcon?: JSX.Element;
  disabled?: boolean,
  onPress: () => void;
}

const TwoStatusButton: React.FC<IProps> = ({title, onPress, containerStyle, titleStyle, rightIcon, disabled}) => {

  return (
    <TouchableOpacity
        style={[styles.btnContainer,{
            backgroundColor: (disabled)? colors.DisabledColor:colors.PrimaryColor,
            borderColor: (disabled)? colors.DisabledColor:colors.PrimaryColor,
        }, containerStyle,]}
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={[styles.txtTitle, {
            color: colors.White,
        }, titleStyle]}
        >{title}</Text>

        {rightIcon}
    </TouchableOpacity>
  )
}

export default TwoStatusButton