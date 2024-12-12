import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ActivityIndicator, Modal } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { scale } from '../../styles/scale';

interface IProps {
  visiable: boolean,
}

const LoadingOverlay: React.FC<IProps> = ({visiable}) => {

  return (
    <Modal
      visible={visiable}
      transparent
    >
      <View style={styles.viewContainer}>
          <ActivityIndicator size={'large'} color={colors.PrimaryColor}/>
      </View>
    </Modal>
  )
}

export default LoadingOverlay