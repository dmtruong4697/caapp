import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  FlatList,
  useWindowDimensions,
  StatusBar,
  Platform
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
import { MessageDetail } from '../../../models/message/message-detail';
import ChatMessageItem from '../../../components/chat-message-item';
import { RootStackParamList } from '../../../navigators/main';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomStatusBar from '../../../components/custom-status-bar';
import { addMessageToChannel } from '../../../store/actions/channel/channel-chat-history-action';
import { case1NavigateRCChatScreenRequest } from '../../../store/actions/rc/navigate-rc-chat-screen/case1-navigate-rc-chat-screen';
import { RCMessage } from '../../../models/rc/message/rc-message';
import { addMessageToRCChannel } from '../../../store/actions/rc/channel/channel-chat-history';
import RCChatMessageItem from '../../../components/rc-chat-message-item';
import { RCChatHistoryItem } from '../../../models/rc/message/rc-chat-history-item';

interface IProps {}

const RCChatScreen: React.FC<IProps> = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'RCChat'>>();

  const profileState = useSelector((state: RootState) => state.profile)
  const currentRCChannelState = useSelector((state: RootState) => state.currentRCChannel)
  const RCChannelChatHistoryState = useSelector((state: RootState) => state.RCChannelChatHistory)

  let messages = RCChannelChatHistoryState.messages;

  const [messageText, setMessageText] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    dispatch(case1NavigateRCChatScreenRequest())
  }, []);

  useEffect(() => {
    if (currentRCChannelState.current_rc_channel?.id) {
      const ws = new WebSocket(`ws://localhost:8910/rc/chat?channel_id=${currentRCChannelState.current_rc_channel?.id}`);

      ws.onopen = () => console.log('WebSocket connected');
      
      ws.onmessage = (event) => {
        const newMessage: RCChatHistoryItem = JSON.parse(event.data);
        dispatch(addMessageToRCChannel(newMessage));
        console.log(RCChannelChatHistoryState.messages);
      };

      ws.onclose = () => console.log('WebSocket closed');
      
      ws.onerror = (e) => console.log(e.message);
      
      setSocket(ws);

      return () => {
        ws.close();
      };
    }
  }, [currentRCChannelState.current_rc_channel?.id]);

  const sendMessage = () => {
    if (socket && messageText) {
      const message = { content: messageText, type: "0", sender_id: profileState.profile?.id };
      socket.send(JSON.stringify(message));
      setMessageText("");
    }
  };

  useEffect(() => {
    messages = RCChannelChatHistoryState.messages;
    console.log(messages.length);
  }, [RCChannelChatHistoryState]);

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
          {/* <Text style={styles.txtHeaderUserName}>{getChannelInfoState.friend_channel_info?.user.first_name} {getChannelInfoState.friend_channel_info?.user.middle_name} {getChannelInfoState.friend_channel_info?.user.last_name}</Text> */}
        </Pressable>

        <TouchableOpacity style={styles.btnHeaderMenu} onPress={() => {console.log(RCChannelChatHistoryState.messages);}}>
          <FontAwesomeIcon icon={faBars} size={22} color={colors.White} />
        </TouchableOpacity>
      </View>

      {/* message list view */}
      <View style={styles.viewChatHistoryContainer}>
        <FlatList
          data={RCChannelChatHistoryState.messages}
          extraData={RCChannelChatHistoryState.messages}
          keyExtractor={(item, index) => item.message.id.toString()}
          renderItem={({ item }) => 
            (<RCChatMessageItem message={item}/>)
          }
          style={{width: '100%',}}
          inverted
        />
      </View>

      {/* bottom view */}
      <View style={styles.viewBottomContainer}>
        <TouchableOpacity 
          style={styles.btnBottom} 
          onPress={() => {
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

export default RCChatScreen;

