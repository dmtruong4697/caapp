import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    icon?: JSX.Element,
    title?: string,
    onPress?: () => void, 
    isSelected?: boolean,
}

const LanguageSettingItem: React.FC<IProps> = ({icon, title, onPress, isSelected}) => {

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={onPress}
    >
        <View style={styles.viewImgIcon}>
            {icon}
        </View>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>{title}</Text>

            <View style={styles.viewImgSelect}>
                {isSelected && <FontAwesomeIcon icon={faCheck} size={18} color={colors.PrimaryColor}/>}
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default LanguageSettingItem