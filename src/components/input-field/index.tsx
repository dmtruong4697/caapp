import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, TextInput, NativeSyntheticEvent, TextInputFocusEventData, InputModeOptions, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scale } from '../../styles/scale';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  title?: string;
  containerStyle?: ViewStyle;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
  inputMode?: InputModeOptions;
  isPassword?: boolean;
  placeHolder?: string;
}

const InputField: React.FC<IProps> = ({title, onBlur, onChangeText, containerStyle, value, inputMode, isPassword, placeHolder}) => {

  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(true);

  return (
    <View style={styles.viewContainer}>
      {(title) && <Text style={[styles.txtTitle, {color: (isFocus)? colors.PrimaryColor: colors.GrayText,}]}>{title}</Text>}
      <View style={[styles.inputContainer, {
        borderColor: (isFocus)? colors.PrimaryColor:colors.PrimaryBorder,
        borderWidth: (isFocus)? 2: 1,
      }, containerStyle]}>
        <TextInput
          secureTextEntry={(isPassword)? isShow:false}
          style={[styles.inputField, {color: colors.InputText}]}
          onBlur={() => {setIsFocus(false)}}
          onChangeText={onChangeText}
          inputMode={inputMode}
          onFocus={() => {setIsFocus(true)}}
          placeholder={placeHolder}
          placeholderTextColor={colors.PlaceholderText}
        />

        {
          (isPassword) && 
        <TouchableOpacity
          onPress={() => {setIsShow(!isShow)}}
        >
          {isShow && <FontAwesomeIcon icon={faEye} style={styles.imgShow} color={colors.GrayBorder}/>}
          {!isShow && <FontAwesomeIcon icon={faEyeSlash} style={styles.imgShow} color={colors.GrayBorder}/>}
        </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default InputField