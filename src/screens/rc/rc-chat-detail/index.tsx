import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { styles } from './styles';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faBars, faDoorOpen, faExclamation, faFaceSmile, faPaperPlane, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { RootStackParamList } from '../../../navigators/main';
import CustomStatusBar from '../../../components/custom-status-bar';
import { leaveRCChannelRequest } from '../../../store/actions/rc/channel/leave-channel';
import { getProfileInfoRequest } from '../../../store/actions/profile/profile';

interface IProps {}

const RCChatDetailScreen: React.FC<IProps> = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'RCChatDetail'>>();

  const profileState = useSelector((state: RootState) => state.profile)
  const currentRCChannelState = useSelector((state: RootState) => state.currentRCChannel)
  const RCChannelChatHistoryState = useSelector((state: RootState) => state.RCChannelChatHistory)
  const leaveRCChannelState = useSelector((state: RootState) => state.leaveRCChannel)

  const [isLoading, setIsLoading] = useState(false);
  const leaveChannel = async() => {
    setIsLoading(true);
    dispatch(leaveRCChannelRequest());
    setIsLoading(false);
  };

  useEffect(() => {
    if (leaveRCChannelState.success_flg) {
      dispatch(getProfileInfoRequest())
    }
  }, [leaveRCChannelState.success_flg])

  useEffect(() => {
    if (profileState.success_flg) {
      navigation.navigate("RCDashboard");
    }
  }, [profileState.success_flg])

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

      </View>

      {/* message list view */}
      <View style={styles.viewListContainer}>
      <TouchableOpacity 
          style={styles.btnGroupItem}
          onPress={() => {
          }}
        >
          <View style={styles.viewIcon}>
            <FontAwesomeIcon icon={faExclamation} size={24} color={colors.DarkColor}/>
          </View>
          <View style={styles.viewButtonTitle}>
          <Text style={styles.txtButtonTitle}>Report</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnGroupItem}
          onPress={() => {
            leaveChannel();
          }}
        >
          <View style={styles.viewIcon}>
            <FontAwesomeIcon icon={faDoorOpen} size={24} color={colors.DarkColor}/>
          </View>
          <View style={styles.viewButtonTitle}>
          <Text style={styles.txtButtonTitle}>Leave chat</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RCChatDetailScreen;

