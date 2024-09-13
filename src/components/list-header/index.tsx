import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user/user-info';

interface IProps {
    title?: string,
    renderSeeAll?: boolean,
    onPressSeeAll?: () => void,
}

const ListHeader: React.FC<IProps> = ({title, renderSeeAll, onPressSeeAll}) => {

  return (
    <View style={styles.viewContainer}>
    </View>
  )
}

export default ListHeader