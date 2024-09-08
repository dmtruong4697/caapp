import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    leftButtonType: 'BACK'|'CANCEL',
    renderLeftButton: boolean,
    renderRightButton: boolean,
    title: string,
    onPressLeftButton?: () => void,
    onPressRightButton?: () => void,
}

const SolidHeader: React.FC<IProps> = ({
    renderLeftButton, 
    renderRightButton, 
    leftButtonType, 
    title, 
    onPressLeftButton, 
    onPressRightButton,
}) => {

  return (
    <View style={styles.viewContainer}>
        <View style={styles.btnContainer}>
            {renderLeftButton && 
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={onPressLeftButton}
            >
                {(leftButtonType == 'BACK') && 
                    <FontAwesomeIcon icon={faArrowLeft} style={styles.iconBack} size={24}/>
                }
                {(leftButtonType == 'CANCEL') && 
                    <FontAwesomeIcon icon={faXmark} style={styles.iconCancel} size={24}/>
                }
            </TouchableOpacity>
            }
        </View>

        <Text style={styles.txtTitle}>{title}</Text>

        <View style={styles.btnContainer}>
            {renderRightButton && 
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={onPressRightButton}
            >
                <FontAwesomeIcon icon={faEllipsis} style={styles.iconOption} size={24}/>
            </TouchableOpacity>
            }
        </View>
    </View>
  )
}

export default SolidHeader