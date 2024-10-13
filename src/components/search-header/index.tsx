import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    userInfo?: UserInfo
}

const SearchHeader: React.FC<IProps> = ({userInfo}) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

  return (
    <View style={styles.viewContainer}>
       <Pressable 
        style={styles.btnSearch}
        onPress={() => {

        }}
        >
            <FontAwesomeIcon icon={faSearch} size={22} color={colors.White}/>
            <Text style={styles.txtSearch}>Tìm kiếm</Text>
        </Pressable>

        <TouchableOpacity
            style={styles.btnAddFriend}
            onPress={() => {
                
            }}
        >
            <FontAwesomeIcon icon={faUserPlus} size={22} color={colors.White}/>
        </TouchableOpacity>
    </View>
  )
}

export default SearchHeader