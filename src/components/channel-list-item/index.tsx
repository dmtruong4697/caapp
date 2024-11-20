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
import { GetChannelListResponceItem } from '../../models/channel-responce/get-channel-list-responce';
import { hhmmConvert } from '../../utils/date-time/date-time-convert';

interface IProps {
    channelInfo?: GetChannelListResponceItem
}

const ChannelListItem: React.FC<IProps> = ({channelInfo}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const profileState = useSelector((state: RootState) => state.profile)

    let channelName: string = "";
    let channelImage: string = "";

    if (channelInfo?.channel.type == 'friend') {
        if (channelInfo.users[0].id == profileState.profile?.id) {
            channelName = channelInfo.users[1].first_name + " " + channelInfo.users[1].middle_name + " " + channelInfo.users[1].last_name
            channelImage = channelInfo.users[1].avatar_image
        } else {
            channelName = channelInfo.users[0].first_name + " " + channelInfo.users[0].middle_name + " " + channelInfo.users[0].last_name
            channelImage = channelInfo.users[0].avatar_image
        }
    }

  return (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate("Chat", 
                {
                    userInfo: null,
                    channel_id: channelInfo?.channel.id,
                    navigate_case: 1,
                })
        }}
    >
        { (channelInfo?.channel.type == 'friend') &&
        <View style={styles.viewContainer}>
            <View style={styles.viewAvatar}>
                <Image style={styles.imgAvatar} source={{uri: channelImage}}/>
            </View>

            <View style={styles.viewContentContainer}>
                <View style={styles.viewNameAndTime}>
                    <Text style={styles.txtName}>{channelName}</Text>
                    <Text style={styles.txtTime}>{hhmmConvert(channelInfo?.last_message.create_at.toString())}</Text>
                </View>

                <View style={styles.viewMessageAndStatus}>
                    {(channelInfo.last_message_sender.id != profileState.profile?.id) &&
                        <Text style={styles.txtMessage}>{channelInfo?.last_message?.content}</Text>
                    }
                    {(channelInfo.last_message_sender.id == profileState.profile?.id) &&
                        <Text style={styles.txtMessage}>You: {channelInfo?.last_message?.content}</Text>
                    }
                </View>
            </View>
        </View>
        }
    </TouchableOpacity>
  )
}

export default ChannelListItem