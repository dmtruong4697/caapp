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

interface IProps {}

const RCChatScreen: React.FC<IProps> = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'RCChat'>>();

  const getChannelInfoState = useSelector((state: RootState) => state.channelInfo);
  const profileState = useSelector((state: RootState) => state.profile)

  const [messageText, setMessageText] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

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
          <Text style={styles.txtHeaderUserName}>{getChannelInfoState.friend_channel_info?.user.first_name} {getChannelInfoState.friend_channel_info?.user.middle_name} {getChannelInfoState.friend_channel_info?.user.last_name}</Text>
        </Pressable>

        <TouchableOpacity style={styles.btnHeaderMenu} onPress={() => {}}>
          <FontAwesomeIcon icon={faBars} size={22} color={colors.White} />
        </TouchableOpacity>
      </View>

      {/* message list view */}
      {/* <View style={styles.viewChatHistoryContainer}>
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
      </View> */}

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
          <TouchableOpacity style={styles.btnSend} onPress={() => {}}>
            <FontAwesomeIcon icon={faPaperPlane} size={24} color={colors.Gray} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RCChatScreen;

