import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    icon?: JSX.Element,
    title?: string,
    iconBackgroundColor?: string,
    onPress?: () => void, 
}

const SettingItem: React.FC<IProps> = ({icon, title, onPress, iconBackgroundColor}) => {

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={onPress}
    >
        <View style={[styles.viewImgIcon,{backgroundColor: iconBackgroundColor}]}>
            {icon}
        </View>

        <Text style={styles.txtTitle}>{title}</Text>

        <View style={styles.viewImgRight}>
        <FontAwesomeIcon icon={faChevronRight} size={14} color={colors.Gray}/>
        </View>
    </TouchableOpacity>
  )
}

export default SettingItem