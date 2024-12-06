import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, TextInput, NativeSyntheticEvent, TextInputFocusEventData, InputModeOptions, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scale } from '../../styles/scale';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  containerStyle?: ViewStyle;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onFocus?: () => void;
  value?: string;
  inputMode?: InputModeOptions;
  isPassword?: boolean;
  placeHolder?: string;
}

const HashtagNameInputField: React.FC<IProps> = ({onBlur, onChangeText, containerStyle, value, inputMode, isPassword, placeHolder, onFocus}) => {

  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.viewContainer}>
      <View style={[styles.inputContainer, {
        borderColor: (isFocus)? colors.PrimaryColor:colors.GrayBorder,
        borderWidth: (isFocus)? 2: 1,
      }, containerStyle]}>
        <View style={styles.viewA}>
            <Text style={styles.txtA}>@</Text>
        </View>
        <TextInput
          style={[styles.inputField, {color: colors.InputText}]}
          onBlur={() => {setIsFocus(false)}}
          onChangeText={onChangeText}
          inputMode={inputMode}
          onFocus={() => {
            setIsFocus(true);
            if (onFocus) {
              onFocus();
            }
          }}
          placeholder={placeHolder}
          placeholderTextColor={colors.PlaceholderText}
        />
      </View>
    </View>
  )
}

export default HashtagNameInputField