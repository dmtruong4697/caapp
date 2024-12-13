import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

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
        style={[styles.btnContainer, containerStyle]}
        onPress={onPress}
    >

      <LinearGradient 
        colors={(type == 'solid')? [colors.White, colors.White]:[colors.PrimaryColor, colors.DarkColor]} 
        style={styles.viewContainer}
        locations={[0.9, 1]}
      >
        <Text style={[styles.txtTitle, {
            color: (type == 'solid')? colors.PrimaryText:colors.White,
        }, titleStyle]}
        >{title}</Text>

        {rightIcon}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button