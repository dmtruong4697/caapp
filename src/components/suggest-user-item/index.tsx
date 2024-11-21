import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createFriendRequestRequest, createFriendRequestSuccess } from '../../store/actions/friend/friend-request';
import { RootState } from '../../store';

interface IProps {
    userInfo?: UserInfo
}

const SuggestUserItem: React.FC<IProps> = ({userInfo}) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const friendRequestState = useSelector((state: RootState) => state.friendRequest);

    const [isSentRequest, setIsSentRequest] = useState(userInfo!.request.id > 0 || friendRequestState.sent_request_list.includes(userInfo!.id))

    const [isLoading, setIsLoading] = useState(false);
    const sendRequest = async()=> {
        setIsLoading(true);
        dispatch(createFriendRequestRequest(userInfo!.id));
        setIsSentRequest(friendRequestState.sent_request_list.includes(userInfo!.id))
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
                    style={styles.btnButton}
                    onPress={() => {}}
                >
                    <Text style={[styles.txtButton]}>Delete</Text>
                </TouchableOpacity>

                { (!isSentRequest) &&
                <TouchableOpacity 
                    style={styles.btnButton}
                    onPress={() => {
                        sendRequest();
                    }}
                >
                    <Text style={[styles.txtButton]}>Send Request</Text>
                </TouchableOpacity>
                }
                { (isSentRequest) &&
                <TouchableOpacity 
                    style={styles.btnUndoRequestButton}
                    onPress={() => {
                        console.log(userInfo!.request);
                    }}
                    disabled
                >
                    <Text style={[styles.txtButton]}>Undo Request</Text>
                </TouchableOpacity>
                }
            </View>
        </View>
    </View>
  )
}

export default SuggestUserItem