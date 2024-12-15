import React, { useEffect, useState, useCallback } from 'react';
import {
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

const RCDashboardScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const profile = useSelector((state: RootState) => state.profile.profile);
  const [gender, setGender] = useState<string | null>(null);
  const [targetGender, setTargetGender] = useState<string | null>(null);
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
    const ws = new WebSocket(`ws://192.168.1.113:8910/rc/queue?user_id=${profile?.id}`);

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

  // useEffect(() => {
  //   if (profile!.current_rc_channel_id > 0) {
  //     navigation.navigate("RCChat");
  //   }
  // })

  return (
    <View style={styles.viewContainer}>
      <CustomStatusBar backgroundColor={colors.PrimaryColor} />
      
      <View style={{padding: scale(12)}}>

        <TouchableOpacity
          style={styles.btnCurrentChannel}
          onPress={() => {
            navigation.navigate("RCChat");
          }}
          disabled={(profile?.current_rc_channel_id <= 0 || profile?.current_rc_channel_id == null)}
        >
          <Text style={styles.txtSelectTitle}>Current RC Channel</Text>
        </TouchableOpacity>
        
        {/* Gender Selection */}
        <View style={styles.viewSelectContainer}>
          <Text style={styles.txtSelectTitle}>You are:</Text>
          <RNPickerSelect
            onValueChange={setGender}
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            style={{ viewContainer: styles.viewSelect }}
          />
        </View>

        {/* Target Gender Selection */}
        <View style={styles.viewSelectContainer}>
          <Text style={styles.txtSelectTitle}>You want to find:</Text>
          <RNPickerSelect
            onValueChange={setTargetGender}
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            style={{ viewContainer: styles.viewSelect }}
          />
        </View>

        {/* Control Buttons */}
        <View style={styles.viewButtonGroup}>
          <View style={styles.viewButton}>
            <TwoStatusButton
              onPress={toggleFinding}
              disabled={!gender || !targetGender}
              title={isFinding ? 'STOP' : 'START'}
            />
          </View>
          {isFinding && <Text style={styles.txtCount}>{secondToMinuteConvert(findingTime)}</Text>}
        </View>
      </View>
    </View>
  );
};

export default RCDashboardScreen;
