import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  FlatList,
  useWindowDimensions
} from 'react-native';
import { styles } from './styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faBars, faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { case2NavigateChatScreenRequest } from '../../../store/actions/case2-navigate-chat-screen-action';
import { MessageDetail } from '../../../models/message/message-detail';
import ChatMessageItem from '../../../components/chat-message-item';

interface IProps {}

const ChatScreen: React.FC<IProps> = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const checkFriendChannelState = useSelector((state: RootState) => state.checkFriendChannel);
  const getChannelInfoState = useSelector((state: RootState) => state.channelInfo);
  const channelChatHistoryState = useSelector((state: RootState) => state.channelChatHistory);
  const case2NavigateChatScreenState = useSelector((state: RootState) => state.case2NavigateChatScreen);
  const profileState = useSelector((state: RootState) => state.profile)

  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<MessageDetail[]>([]); 
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    dispatch(case2NavigateChatScreenRequest(4));
  }, []);

  useEffect(() => {
    console.log(checkFriendChannelState.channel);
    console.log(getChannelInfoState.friend_channel_info);
    console.log(channelChatHistoryState.messages);

    if (channelChatHistoryState.messages && channelChatHistoryState.messages.messages) {
      setMessages(channelChatHistoryState.messages.messages);
    }
  }, [
    checkFriendChannelState.channel,
    getChannelInfoState.friend_channel_info,
    channelChatHistoryState.messages,
  ]);

  useEffect(() => {
    // if (case2NavigateChatScreenState.success_flg == ) {
      const ws = new WebSocket(`ws://localhost:8910/chat/ws?channel_id=${getChannelInfoState.friend_channel_info?.channel.id}`);

      ws.onopen = () => {
        console.log('WebSocket is connected');
      };

      ws.onmessage = (event) => {
        const newMessage: MessageDetail = JSON.parse(event.data);
        setMessages((prevMessages) => [newMessage, ...prevMessages]);
      };

      ws.onclose = () => {
        console.log('WebSocket is closed');
      };

      ws.onerror = e => {
        console.log(e.message);
      };

      setSocket(ws);

      return () => {
        ws.close();
      };
    // }
  }, [case2NavigateChatScreenState.success_flg]);

  const sendMessage = () => {
    if (socket && messageText) {
      const message = { content: messageText, sender_id: profileState.profile!.id };
      console.log(message)
      socket.send(JSON.stringify(message));
      // setMessages((prevMessages) => [...prevMessages, message]);
      setMessageText("");
    }
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeaderContainer}>
        <TouchableOpacity
          style={styles.btnHeaderMenu}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} size={22} color={colors.White} />
        </TouchableOpacity>

        <Pressable style={styles.btnHeaderUserName} onPress={() => {}}>
          <Text style={styles.txtHeaderUserName}>{getChannelInfoState.friend_channel_info?.user.first_name} {getChannelInfoState.friend_channel_info?.user.middle_name} {getChannelInfoState.friend_channel_info?.user.last_name}</Text>
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
