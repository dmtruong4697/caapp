import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/button';
import InputField from '../../../components/input-field';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../../../styles/colors';
import { faEllipsis, faMagnifyingGlass, faQrcode } from '@fortawesome/free-solid-svg-icons';
import CustomStatusBar from '../../../components/custom-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ChannelListItem from '../../../components/channel-list-item';
import { scale } from '../../../styles/scale';
import { getChannelListRequest, updateChannelListItem } from '../../../store/actions/channel/get-channel-list-action';

interface IProps {}

const ChatListScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const profileState = useSelector((state: RootState) => state.profile)

    const channelListState = useSelector((state: RootState) => state.channelList);

    // refresh handle
    const [refreshing,setRefreshing] = useState(false);
    const pullToRefreshFunction = () => {
        setRefreshing(true)
        dispatch(getChannelListRequest(20, 0))
        setRefreshing(false)
    }

    useEffect(() => {
      dispatch(getChannelListRequest(20, 0))
    },[])

    const isFocused = useIsFocused();
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8910/ws-chatlist/connect?user_id=${profileState.profile?.id}`);
  
        ws.onopen = () => console.log('WebSocket for chat list connected');
        
        ws.onmessage = (event) => {
          const newMessage = JSON.parse(event.data);
          dispatch(updateChannelListItem(newMessage));
          console.log(newMessage);
          
        };
  
        ws.onclose = () => console.log('WebSocket for chat list closed');
        
        ws.onerror = (e) => console.log(e.message);
        
        setSocket(ws);
  
        return () => {
          ws.close();
        };
    }, [isFocused]);

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    {/* <CustomStatusBar backgroundColor={colors.PrimaryColor}/> */}
    <SafeAreaView style={styles.viewContainer}>
      <ScrollView 
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={pullToRefreshFunction}
          />
      }
      >
        <View style={styles.viewTopSearch}>
          <Image style={styles.imgCaapp} source={require('../../../assets/illustrations/caapp.png')}/>
          <View style={{flexDirection: 'row', gap: scale(5)}}>
            <TouchableOpacity
              style={styles.btnSearch}
              onPress={() => {}}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color={colors.Black}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnSearch}
              onPress={() => {}}
            >
              <FontAwesomeIcon icon={faQrcode} size={20} color={colors.Black}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.viewStoryList}>

        </View> */}

        <View style={styles.viewChatList}>
          {Object.keys(channelListState.channels).length > 0 && 
            <>
            <View style={styles.viewChatListTitle}>
              <Text style={styles.txtChatListTitle}>Chats</Text>
              <TouchableOpacity
                style={styles.btnChatListOption}
                onPress={() => {
                  console.log(channelListState.channels);
                }}
              >
                <FontAwesomeIcon icon={faEllipsis} size={20} color={colors.Black}/>
              </TouchableOpacity>
            </View>

            <FlatList
              data={Object.values(channelListState.channels)}
              // keyExtractor={item => item.Id.toString()}
              scrollEnabled={false}
              renderItem={({item}) => (
                <ChannelListItem channelInfo={item}/>
              )}
              contentContainerStyle={{gap: scale(15),}}
              style={{width: '100%'}}
            />
            </>
          }

          {
            Object.keys(channelListState.channels).length == 0 &&
            <View style={styles.viewEmpty}>
              <Image style={styles.imgEmpty} source={require('../../../assets/illustrations/empty-box-256px.png')}/>
              <Text style={styles.txtEmpty}>🤔 No conversations yet! Start chatting to connect with someone now. 😊</Text>
            </View>
          }
          
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default ChatListScreen    