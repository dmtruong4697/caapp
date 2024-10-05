import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { acceptFriendRequestRequest, createFriendRequestRequest, createFriendRequestSuccess } from '../../store/actions/friend-request';
import { RootState } from '../../store';

interface IProps {
    userInfo?: UserInfo
}

const ReceivedRequestItem: React.FC<IProps> = ({userInfo}) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const friendRequestState = useSelector((state: RootState) => state.friendRequest);

    const [isLoading, setIsLoading] = useState(false);
    const acceptRequest = async()=> {
        setIsLoading(true);
        dispatch(acceptFriendRequestRequest(userInfo!.request.id));
        setIsLoading(false);
    };

  return (
    <View style={styles.viewContainer}>
        <TouchableOpacity
            style={styles.imgAvatar}
            onPress={() => {}}
        >
            <Image style={styles.imgAvatar} source={{uri: userInfo!.avatar_image}}/>
        </TouchableOpacity>

        <View style={styles.viewInfo}>
            <View style={styles.viewNameContainer}>
                <Text style={styles.txtFullName}>{userInfo!.first_name} {userInfo!.middle_name} {userInfo!.last_name}</Text>
                <Text style={styles.txtHashtagName}>@{userInfo!.hashtag_name}</Text>
            </View>

            <View style={styles.viewButtonGroup}>
                <TouchableOpacity 
                    style={styles.btnRejectButton}
                    onPress={() => {}}
                >
                    <Text style={[styles.txtButton]}>Reject</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnAcceptButton}
                    onPress={() => {
                        acceptRequest();
                    }}
                >
                    <Text style={[styles.txtButton]}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ReceivedRequestItem