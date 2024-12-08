import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { acceptFriendRequestRequest, createFriendRequestRequest, createFriendRequestSuccess } from '../../store/actions/friend/friend-request';
import { RootState } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageDetail } from '../../models/message/message-detail';
import { RCMessage } from '../../models/rc/message/rc-message';
import { RCChatHistoryItem } from '../../models/rc/message/rc-chat-history-item';

interface IProps {
    message?: RCChatHistoryItem
}

const RCChatMessageItem: React.FC<IProps> = ({message}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const profileState = useSelector((state: RootState) => state.profile)

  return (
    <View 
        style={[
            styles.viewContainer,
            {
                flexDirection: (message?.message.sender_id == profileState.profile?.id)? 'row-reverse':'row'
            }
        ]}
    >

        <View 
            style={[
                styles.viewMessageContent,
                {
                    backgroundColor: (message?.message.sender_id == profileState.profile?.id)? colors.LightColor : colors.White,
                }
            ]}>
            <Text style={styles.txtMessageContent}>{message?.message.content}</Text>
        </View>
    </View>
  )
}

export default RCChatMessageItem