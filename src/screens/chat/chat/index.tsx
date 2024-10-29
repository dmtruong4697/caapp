import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { faAngleLeft, faBars, faFaceSmile, faPaperPlane, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { case1NavigateChatScreenRequest } from '../../../store/actions/case1-navigate-chat-screen-action';
import { case2NavigateChatScreenRequest } from '../../../store/actions/case2-navigate-chat-screen-action';

interface IProps {}

const ChatScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const checkFriendChannelState = useSelector((state: RootState) => state.checkFriendChannel);
    const getChannelInfoState = useSelector((state: RootState) => state.channelInfo);
    const channelChatHistoryState = useSelector((state: RootState) => state.channelChatHistory);

    useEffect(() => {
      dispatch(case2NavigateChatScreenRequest(4))
    },[])

    useEffect(() => {
      console.log(checkFriendChannelState.channel);
      console.log(getChannelInfoState.friend_channel_info);
      console.log(channelChatHistoryState.messages);
    }, [checkFriendChannelState.channel, getChannelInfoState.friend_channel_info, channelChatHistoryState.messages]);

    const [messageText, setMessageText] = useState("");

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeaderContainer}>
        <TouchableOpacity
            style={styles.btnHeaderMenu}
            onPress={() => {
                navigation.goBack()
            }}
        >
            <FontAwesomeIcon icon={faAngleLeft} size={22} color={colors.White}/>
        </TouchableOpacity>

       <Pressable 
        style={styles.btnHeaderUserName}
        onPress={() => {

        }}
        >
            <Text style={styles.txtHeaderUserName}>Tìm kiếm</Text>
        </Pressable>

        <TouchableOpacity
            style={styles.btnHeaderMenu}
            onPress={() => {
                
            }}
        >
            <FontAwesomeIcon icon={faBars} size={22} color={colors.White}/>
        </TouchableOpacity>
      </View>

      {/* bottom view */}
      <View style={styles.viewBottomContainer}>
        <TouchableOpacity
            style={styles.btnBottom}
            onPress={() => {
                
            }}
        >
            <FontAwesomeIcon icon={faFaceSmile} size={24} color={colors.Gray}/>
        </TouchableOpacity>

        <View style={styles.viewTextInputContainer}>
          <TextInput
            placeholder='Tin nhắn'
            placeholderTextColor={colors.PlaceholderText}
            style={styles.txtMessageInput}
            onChangeText={(text) => {
              setMessageText(text);
            }}
          />
        </View>
        {
          (messageText != "") && 
          <TouchableOpacity
            style={styles.btnSend}
            onPress={() => {

            }}
          >
            <FontAwesomeIcon icon={faPaperPlane} size={24} color={colors.Gray}/>
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default ChatScreen    