import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';

interface IProps {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  type?: 'default'|'solid';
  rightIcon?: JSX.Element;
  onPress: () => void;
}

const Button: React.FC<IProps> = ({title, onPress, containerStyle, titleStyle, type, rightIcon}) => {

  return (
    <TouchableOpacity
        style={[styles.btnContainer,{
            backgroundColor: (type == 'solid')? 'transparent':colors.PrimaryColor,
            borderColor: (type == 'solid')? colors.GrayBorder:colors.PrimaryColor,
        }, containerStyle]}
        onPress={onPress}
    >
        <Text style={[styles.txtTitle, {
            color: (type == 'solid')? colors.PrimaryText:colors.White,
        }, titleStyle]}
        >{title}</Text>

        {rightIcon}
    </TouchableOpacity>
  )
}

export default Button