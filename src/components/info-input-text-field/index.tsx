import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, TextInput, NativeSyntheticEvent, TextInputFocusEventData, InputModeOptions, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scale } from '../../styles/scale';
import { faCheck, faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  title?: string;
  containerStyle?: ViewStyle;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
  inputMode?: InputModeOptions;
  isPassword?: boolean;
  placeHolder?: string;
  renderIsCheck?: boolean;
  isCheck?: boolean;
}

const InfoInputTextField: React.FC<IProps> = ({
    title, 
    onBlur, 
    onChangeText, 
    containerStyle, 
    value, 
    inputMode, 
    isPassword, 
    placeHolder, 
    isCheck,
    renderIsCheck,
}) => {

  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(true);

  return (
    <View style={styles.viewContainer}>
        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>{title}</Text>
        </View>

        <View style={[
            styles.viewInputContainer,
            {
                borderBottomColor: (isFocus)? colors.PrimaryColor:colors.GrayBorder,
            }
            ]}
        >
            <TextInput
                secureTextEntry={(isPassword)? isShow:false}
                style={styles.inputField}
                onBlur={() => {setIsFocus(false)}}
                onChangeText={onChangeText}
                inputMode={inputMode}
                onFocus={() => {setIsFocus(true)}}
                placeholder={placeHolder}
                placeholderTextColor={colors.PlaceholderText}
            />
            {(renderIsCheck) &&
                <View style={styles.viewCheck}>
                    {(isCheck) && <FontAwesomeIcon icon={faCheck} style={styles.imgCheck} color={colors.CheckSuccess}/>}
                    {(!isCheck) && <FontAwesomeIcon icon={faXmark} style={styles.imgCheck} color={colors.CheckFailure}/>}
                </View>
            }
        </View>
    </View>
  )
}

export default InfoInputTextField