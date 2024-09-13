import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user/user-info';

interface IProps {
    userInfo?: UserInfo
}

const SearchUserItem: React.FC<IProps> = ({userInfo}) => {

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => {

        }}
    >
    </TouchableOpacity>
  )
}

export default SearchUserItem