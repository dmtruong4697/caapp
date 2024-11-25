import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, TextInput, NativeSyntheticEvent, TextInputFocusEventData, InputModeOptions, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import DatePicker from 'react-native-date-picker'

interface IProps {
  title?: string;
  date: Date;
  containerStyle?: ViewStyle;
  onPickedDate: (date: Date) => void;
}

const InfoInputDatePicker: React.FC<IProps> = ({
    title, 
    date,
    containerStyle,
    onPickedDate,
}) => {

  const [isFocus, setIsFocus] = useState(false);
  const [isOpenPicker, setIsOpenPicker] = useState(false);
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
                    setIsOpenPicker(true);
                }}
            >
                <Text style={styles.txtDate}>{date.getDate()}  /  {date.getMonth() + 1}  /  {date.getFullYear()}</Text>
            </TouchableOpacity>
        </View>

        <DatePicker
            modal
            mode='date'
            open={isOpenPicker}
            date={date}
            onConfirm={(date) => {
                setIsOpenPicker(false);
                onPickedDate(date);
                setPickedDate(date);
            }}
            onCancel={() => {
                setIsOpenPicker(false);
            }}
        />
    </View>
  )
}

export default InfoInputDatePicker