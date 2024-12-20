import React, { useEffect, useState, useCallback } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { styles } from './styles';
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../../navigators/main';
import RNPickerSelect from 'react-native-picker-select';
import TwoStatusButton from '../../../components/2-status-button';
import { secondToMinuteConvert } from '../../../utils/date-time/date-time-convert';
import { RootState } from '../../../store';
import CustomStatusBar from '../../../components/custom-status-bar';
import { colors } from '../../../styles/colors';
import { scale } from '../../../styles/scale';
import { setCurrentRCChannel } from '../../../store/actions/rc/channel/current-channel';
import LinearGradient from 'react-native-linear-gradient';

const RCDashboardScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const profile = useSelector((state: RootState) => state.profile.profile);
  const [gender, setGender] = useState<string | null>("male");
  const [targetGender, setTargetGender] = useState<string | null>("male");
  const [isFinding, setIsFinding] = useState(false);
  const [findingTime, setFindingTime] = useState(0);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isFinding) {
      interval = setInterval(() => setFindingTime((prev) => prev + 1), 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFinding]);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8910/rc/queue?user_id=${profile?.id}`);

    ws.onopen = () => console.log('WebSocket connected');
    // ws.onmessage = (event) => console.log('Message:', JSON.parse(event.data));
    ws.onmessage = (event) => onMessage(event);
    ws.onclose = () => console.log('WebSocket closed');
    ws.onerror = (e) => console.error('WebSocket error:', e.message);

    setSocket(ws);

    return () => ws.close();
  }, [isFocused, profile?.id]);

  const onMessage = (event: WebSocketMessageEvent) => {
    const message = JSON.parse(event.data);
    if (message.id > 0) {
      setCurrentRCChannel(message.id);
      navigation.navigate("RCChat");
    }
  }

  const toggleFinding = useCallback(() => {
    if (!socket) return;

    const message = {
      user_id: profile?.id,
      gender,
      target_gender: targetGender,
      request_type: isFinding ? '1' : '0',
    };

    socket.send(JSON.stringify(message));
    setIsFinding((prev) => !prev);

    if (!isFinding) setFindingTime(0);
  }, [socket, profile?.id, gender, targetGender, isFinding]);

  return (
    <View style={styles.viewContainer}>
      <LinearGradient 
          style={{flex: 1}} 
          colors={[colors.PrimaryColor, colors.LightColor]} 
          locations={[0,1]}
      >
        <SafeAreaView style={{flex: 1, marginHorizontal: scale(12)}}>
        <View style={styles.viewHeader}>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <Text style={styles.txtSetting}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewSelectContainer}>
          <TouchableOpacity
            style={styles.viewSelectItem}
            onPress={() => {}}
          >
            {/* <Image style={styles.imgUser} source={}/> */}
            <Text style={styles.txtUser}>You</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewSelectItem}
            onPress={() => {}}
          >
            {/* <Image style={styles.imgUser} source={}/> */}
            <Text style={styles.txtUser}>Stranger</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewButtonGroup}>
          <View style={styles.viewSearchContainer}>
            <TouchableOpacity
              style={styles.btnSearch}
              onPress={toggleFinding}
              disabled={!gender || !targetGender}
            >
              <Text style={styles.txtSearchButton}>{isFinding? 'STOP' : 'START'}</Text>
            </TouchableOpacity>

            <View style={styles.viewCount}>
              {isFinding && <Text style={styles.txtCount}>{secondToMinuteConvert(findingTime)}</Text>}
            </View>
          </View>

          <TouchableOpacity
            style={styles.btnCurrentChannel}
            onPress={() => {
              navigation.navigate("RCChat");
            }}
            disabled={(profile?.current_rc_channel_id <= 0 || profile?.current_rc_channel_id == null)}
          >
            <Text style={[styles.txtCurrentChannel,{color: (profile?.current_rc_channel_id <= 0 || profile?.current_rc_channel_id == null)? colors.PlaceholderText:colors.PrimaryText}]}>Keep talking?</Text>
          </TouchableOpacity>
        </View>

        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default RCDashboardScreen;
