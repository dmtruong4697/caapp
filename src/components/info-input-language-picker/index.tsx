import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, TextInput, NativeSyntheticEvent, TextInputFocusEventData, InputModeOptions, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import DatePicker from 'react-native-date-picker'

interface IProps {
  title?: string;
  language?: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

const InfoInputLanguagePicker: React.FC<IProps> = ({
    title, 
    language,
    containerStyle,
    onPress,
}) => {

  const [isFocus, setIsFocus] = useState(false);
  const [pickedDate, setPickedDate] = useState<Date>(new Date());

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
            <TouchableOpacity
                style={styles.inputField}
                onPress={() => {
                    onPress();
                }}
            >
                <Text style={styles.txtLanguage}>{language}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InfoInputLanguagePicker