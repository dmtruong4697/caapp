import React, { useEffect, useState, useCallback } from 'react';
import {
  Image,
  Modal,
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
import { getProfileInfoRequest } from '../../../store/actions/profile/profile';
import Config from 'react-native-config';
import { profileInfoRequest } from '../../../store/actions/profile/profile-info';

const RCDashboardScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const profile = useSelector((state: RootState) => state.profile);
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
    const ws = new WebSocket(`${Config.WS_BASE_URL}/rc/queue?user_id=${profile.profile?.id}`);

    console.log("user id: ",profile.profile?.id);

    ws.onopen = () => console.log('WebSocket connected');
    // ws.onmessage = (event) => console.log('Message:', JSON.parse(event.data));
    ws.onmessage = (event) => onMessage(event);
    ws.onclose = () => console.log('WebSocket closed');
    ws.onerror = (e) => console.error('WebSocket error:', e.message);

    setSocket(ws);

    return () => ws.close();
  }, [isFocused, profile.profile?.id]);

  const onMessage = (event: WebSocketMessageEvent) => {
    const message = JSON.parse(event.data);
    if (message.id > 0) {
      setCurrentRCChannel(message.id);
      toggleFinding();
      dispatch(profileInfoRequest());
      navigation.navigate("RCChat");
    }
  }

  const toggleFinding = useCallback(() => {
    if (!socket) return;

    const message = {
      user_id: profile.profile?.id,
      gender,
      target_gender: targetGender,
      request_type: isFinding ? '1' : '0',
    };

    socket.send(JSON.stringify(message));
    setIsFinding((prev) => !prev);

    if (!isFinding) setFindingTime(0);
  }, [socket, profile.profile?.id, gender, targetGender, isFinding]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [selectingType, setSelectingType] = useState(0);

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
            <Text style={styles.txtSetting}>{t('rc_dashboard_screen_setting')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewSelectContainer}>
          <TouchableOpacity
            style={styles.viewSelectItem}
            onPress={() => {
              setSelectingType(0);
              toggleModal();
            }}
          >
            {gender == 'male' && <Image style={styles.imgUser} source={require('../../../assets/illustrations/boy.png')}/>}
            {gender == 'female' && <Image style={styles.imgUser} source={require('../../../assets/illustrations/girl.png')}/>}
            {gender == 'other' && <Image style={styles.imgUser} source={require('../../../assets/illustrations/rainbow.png')}/>}
            <Text style={styles.txtUser}>{t('rc_dashboard_screen_you')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewSelectItem}
            onPress={() => {
              setSelectingType(1);
              toggleModal();
            }}
          >
            {targetGender == 'male' && <Image style={styles.imgUser} source={require('../../../assets/illustrations/boy.png')}/>}
            {targetGender == 'female' && <Image style={styles.imgUser} source={require('../../../assets/illustrations/girl.png')}/>}
            {targetGender == 'other' && <Image style={styles.imgUser} source={require('../../../assets/illustrations/rainbow.png')}/>}
            <Text style={styles.txtUser}>{t('rc_dashboard_screen_stranger')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewButtonGroup}>
          <View style={styles.viewSearchContainer}>
            <TouchableOpacity
              style={[styles.btnSearch, {backgroundColor: isFinding? colors.BasicRed:colors.BasicOrange}]}
              onPress={toggleFinding}
              disabled={!gender || !targetGender}
            >
              <Text style={styles.txtSearchButton}>{isFinding? t('rc_dashboard_screen_stop') : t('rc_dashboard_screen_start')}</Text>
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
            disabled={(profile.profile?.current_rc_channel_id <= 0 || profile.profile?.current_rc_channel_id == null)}
          >
            <Text style={[styles.txtCurrentChannel,{color: (profile.profile?.current_rc_channel_id <= 0 || profile.profile?.current_rc_channel_id == null)? colors.PlaceholderText:colors.PrimaryText}]}>{t('rc_dashboard_screen_keep_talking')}?</Text>
          </TouchableOpacity>
        </View>

        </SafeAreaView>

        <Modal
          visible={isModalVisible}
          transparent
          animationType="fade"
          onRequestClose={toggleModal} 
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={1}
            onPressOut={toggleModal}
          >
            <View style={styles.viewModal}>
              <TouchableOpacity
                style={styles.btnModalItem}
                onPress={() => {
                  if (selectingType == 0) {
                    setGender('male')
                  } else {
                    setTargetGender('male')
                  }
                  toggleModal()
                }}
              >
                <Image style={styles.imgModalItem} source={require('../../../assets/illustrations/boy.png')}/>
                <Text style={styles.txtModalItem}>{t('rc_dashboard_screen_keep_male')}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnModalItem}
                onPress={() => {
                  if (selectingType == 0) {
                    setGender('female')
                  } else {
                    setTargetGender('female')
                  }
                  toggleModal()
                }}
              >
                <Image style={styles.imgModalItem} source={require('../../../assets/illustrations/girl.png')}/>
                <Text style={styles.txtModalItem}>{t('rc_dashboard_screen_keep_female')}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnModalItem}
                onPress={() => {
                  if (selectingType == 0) {
                    setGender('other')
                  } else {
                    setTargetGender('other')
                  }

                  toggleModal()
                }}
              >
                <Image style={styles.imgModalItem} source={require('../../../assets/illustrations/rainbow.png')}/>
                <Text style={styles.txtModalItem}>{t('rc_dashboard_screen_keep_other')}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </LinearGradient>
    </View>
  );
};

export default RCDashboardScreen;
