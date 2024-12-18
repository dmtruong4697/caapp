import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  FlatList,
  useWindowDimensions,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import { styles } from './styles';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faBars, faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { case2NavigateChatScreenRequest } from '../../../store/actions/navigate-chat-screen/case2-navigate-chat-screen-action';
import { MessageDetail } from '../../../models/message/message-detail';
import ChatMessageItem from '../../../components/chat-message-item';
import { RootStackParamList } from '../../../navigators/main';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomStatusBar from '../../../components/custom-status-bar';
import { case1NavigateChatScreenRequest } from '../../../store/actions/navigate-chat-screen/case1-navigate-chat-screen-action';
import { addMessageToChannel } from '../../../store/actions/channel/channel-chat-history-action';

interface IProps {}

const ChatScreen: React.FC<IProps> = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'Chat'>>();
  const {userInfo, channel_id, navigate_case} = route.params;

  const checkFriendChannelState = useSelector((state: RootState) => state.checkFriendChannel);
  const getChannelInfoState = useSelector((state: RootState) => state.channelInfo);
  const channelChatHistoryState = useSelector((state: RootState) => state.channelChatHistory);
  const case2NavigateChatScreenState = useSelector((state: RootState) => state.case2NavigateChatScreen);
  const profileState = useSelector((state: RootState) => state.profile)

  const channelId = getChannelInfoState.friend_channel_info?.channel.id;

  let messages = channelChatHistoryState.channels_chat_history[channelId] || [];

  const [messageText, setMessageText] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (navigate_case == 1) {
      dispatch(case1NavigateChatScreenRequest('friend',channel_id!))
    } else {
      dispatch(case2NavigateChatScreenRequest(userInfo!.id));
    }
  }, []);

  useEffect(() => {
    console.log(checkFriendChannelState.channel);
    console.log(getChannelInfoState.friend_channel_info);
    console.log(channelChatHistoryState.messages);

    messages = channelChatHistoryState.channels_chat_history[channelId] || [];
  }, [
    checkFriendChannelState.channel,
    getChannelInfoState.friend_channel_info,
    channelChatHistoryState.messages,
  ]);

  useEffect(() => {
    if (channelId) {
      const ws = new WebSocket(`ws://localhost:8910/chat/ws?channel_id=${channelId}`);

      ws.onopen = () => console.log('WebSocket connected');
      
      ws.onmessage = (event) => {
        const newMessage: MessageDetail = JSON.parse(event.data);
        dispatch(addMessageToChannel(newMessage));
      };

      ws.onclose = () => console.log('WebSocket closed');
      
      ws.onerror = (e) => console.log(e.message);
      
      setSocket(ws);

      return () => {
        ws.close();
      };
    }
  }, [channelId]);

  const sendMessage = () => {
    if (socket && messageText) {
      const message = { content: messageText, sender_id: profileState.profile!.id };
      socket.send(JSON.stringify(message));
      setMessageText("");
    }
  };

  return (
    <View style={styles.viewContainer}>
      <CustomStatusBar backgroundColor={colors.DarkColor}/>
      <View style={styles.viewHeaderContainer}>
        <TouchableOpacity
          style={styles.btnHeaderMenu}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} size={22} color={colors.White} />
        </TouchableOpacity>

        <Pressable style={styles.btnHeaderUserName} onPress={() => {}}>
          <View style={styles.viewFullName}>
          <Text style={styles.txtHeaderUserName}>{getChannelInfoState.friend_channel_info?.user.first_name} {getChannelInfoState.friend_channel_info?.user.middle_name} {getChannelInfoState.friend_channel_info?.user.last_name}</Text>
            {
                userInfo?.verification_status == '1' &&
                <Image style={styles.imgVerify} source={require('../../../assets/icons/verification-status/verified-blue-64px.png')}/>
            }
            {
                userInfo?.verification_status == '990' &&
                <Image style={styles.imgVerify} source={require('../../../assets/icons/verification-status/verified-yellow-64px.png')}/>
            }
            {
                userInfo?.verification_status == '999' &&
                <Image style={styles.imgVerify} source={require('../../../assets/icons/verification-status/verified-red-64px.png')}/>
            }
          </View>
        </Pressable>

        <TouchableOpacity style={styles.btnHeaderMenu} onPress={() => {}}>
          <FontAwesomeIcon icon={faBars} size={22} color={colors.White} />
        </TouchableOpacity>
      </View>

      {/* message list view */}
      <View style={styles.viewChatHistoryContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ChatMessageItem message={item}/>
            // <Text>{item.sender?.id}: {item.message.content}</Text>
          )}
          style={{width: '100%',}}
          inverted
        />
      </View>

      {/* bottom view */}
      <View style={styles.viewBottomContainer}>
        <TouchableOpacity 
          style={styles.btnBottom} 
          onPress={() => {
            console.log(messages);
          }}
        >
          <FontAwesomeIcon icon={faFaceSmile} size={24} color={colors.Gray} />
        </TouchableOpacity>

        <View style={styles.viewTextInputContainer}>
          <TextInput
            placeholder="Tin nhắn"
            placeholderTextColor={colors.PlaceholderText}
            style={styles.txtMessageInput}
            onChangeText={setMessageText}
            value={messageText}
          />
        </View>
        {messageText !== "" && (
          <TouchableOpacity style={styles.btnSend} onPress={sendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} size={24} color={colors.Gray} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ChatScreen;

