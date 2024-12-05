import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

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
        style={[styles.btnContainer, containerStyle,]}
        onPress={onPress}
        disabled={disabled}
    >
      <LinearGradient 
        colors={(disabled)? [colors.DisabledPrimaryColor, colors.DisabledDarkColor]:[colors.PrimaryColor, colors.DarkColor]} 
        style={styles.viewContainer}
        locations={[0, 1]}
      >
        <Text style={[styles.txtTitle, {
            color: colors.White,
        }, titleStyle]}
        >{title}</Text>

        {rightIcon}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default TwoStatusButton