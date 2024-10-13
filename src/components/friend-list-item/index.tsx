import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { acceptFriendRequestRequest, createFriendRequestRequest, createFriendRequestSuccess } from '../../store/actions/friend-request';
import { RootState } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
    userInfo?: UserInfo
}

const FriendListItem: React.FC<IProps> = ({userInfo}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

  return (
    <TouchableOpacity 
        style={styles.viewContainer}
        onPress={() => {
            navigation.navigate("Chat")
        }}
    >
        <Image style={styles.imgAvatar} source={{uri: userInfo?.avatar_image}}/>

        <View style={styles.viewNameContainer}>
            <Text style={styles.txtFullName}>{userInfo!.first_name} {userInfo!.middle_name} {userInfo!.last_name}</Text>
            <Text style={styles.txtHashtagName}>@{userInfo!.hashtag_name}</Text>
        </View>

        <TouchableOpacity
            style={styles.btnCall}
            onPress={() => {

            }}
        >
            <FontAwesomeIcon icon={faPhone} size={22} color={colors.Gray}/>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.btnVideoCall}
            onPress={() => {

            }}
        >
            <FontAwesomeIcon icon={faVideo} size={22} color={colors.Gray}/>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default FriendListItem