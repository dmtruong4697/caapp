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
import { faArrowRight, faBell, faEllipsis, faLanguage, faMagnifyingGlass, faPlus, faPowerOff, faQrcode, faUser } from '@fortawesome/free-solid-svg-icons';
import CustomStatusBar from '../../../components/custom-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ChannelListItem from '../../../components/channel-list-item';
import { scale } from '../../../styles/scale';
import { getChannelListRequest, updateChannelListItem } from '../../../store/actions/channel/get-channel-list-action';
import LinearGradient from 'react-native-linear-gradient';
import SettingItem from '../../../components/setting-item';
import LoadingOverlay from '../../../components/loading-overlay';
import { logoutRequest } from '../../../store/actions/auth/logout';

interface IProps {}

const SettingScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const profileState = useSelector((state: RootState) => state.profile);
    const logoutState = useSelector((state: RootState) => state.logout);

    const logout = async() => {
      setIsLoading(true);
      dispatch(logoutRequest());
      // setIsLoading(false);
    }

    useEffect(() => {
      if (logoutState.success_flg) {
        setIsLoading(false);
        navigation.navigate("Login");
      }
    },[logoutState.success_flg])

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <LoadingOverlay visiable={isLoading}/>
    <SafeAreaView style={styles.viewContainer}>
      <ScrollView 
        style={{flex: 1}}
      >
        <View style={styles.viewTopSearch}>
          <Text style={styles.txtCaapp}>Setting</Text>
          <View style={{flexDirection: 'row', gap: scale(8)}}>
            <TouchableOpacity
              style={styles.btnSearch}
              onPress={() => {}}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color={colors.Black}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnSearch}
              onPress={() => {navigation.navigate("QRScan")}}
            >
              <FontAwesomeIcon icon={faQrcode} size={20} color={colors.Black}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnSearch}
              onPress={() => {}}
            >
              <FontAwesomeIcon icon={faPlus} size={20} color={colors.Black}/>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.viewProfileCard}
          onPress={() => {
            navigation.navigate("MyProfile");
          }}
        >
          <LinearGradient 
            style={styles.viewLinnear} 
            colors={[colors.PrimaryColor, colors.LightColor]} 
            locations={[0,1]}
          >
            <Image style={styles.imgAvavtar} source={{uri: profileState.profile?.avatar_image}}/>
            <View style={styles.viewNameContainer}>
              <View style={styles.viewFullName}>
                <Text style={styles.txtFullName}>{profileState.profile?.first_name} {profileState.profile?.middle_name} {profileState.profile?.last_name}</Text>
                {
                    profileState.profile?.verification_status == '1' &&
                    <Image style={styles.imgVerify} source={require('../../../assets/icons/verification-status/verified-blue-64px.png')}/>
                }
                {
                    profileState.profile?.verification_status == '990' &&
                    <Image style={styles.imgVerify} source={require('../../../assets/icons/verification-status/verified-yellow-64px.png')}/>
                }
                {
                    profileState.profile?.verification_status == '999' &&
                    <Image style={styles.imgVerify} source={require('../../../assets/icons/verification-status/verified-red-64px.png')}/>
                }
              </View>
              <Text style={styles.txtHashtagName}>@{profileState.profile?.hashtag_name}</Text>
            </View>
            <View style={styles.viewImageRight}>
              {/* <FontAwesomeIcon icon={faArrowRight} size={20} color={colors.Black}/> */}
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.viewListContainer}>
          <Text style={styles.txtListTitle}>Account</Text>
          <View style={styles.viewList}>
            <SettingItem
              icon={<FontAwesomeIcon icon={faUser} size={22} color={colors.DarkColor}/>}
              title='Profile'
              iconBackgroundColor={colors.LightColor}
              onPress={() => {

              }}
            />
          </View>
        </View>

        <View style={styles.viewListContainer}>
          <Text style={styles.txtListTitle}>Notifications</Text>
          <View style={styles.viewList}>
            <SettingItem
              icon={<FontAwesomeIcon icon={faBell} size={22} color={colors.DarkYellow}/>}
              title='Notifications'
              iconBackgroundColor={colors.LightYellow}
              onPress={() => {

              }}
            />

            <SettingItem
              icon={<FontAwesomeIcon icon={faLanguage} size={22} color={colors.DarkOrange}/>}
              title='Language'
              iconBackgroundColor={colors.LightOrange}
              onPress={() => {

              }}
            />
          </View>
        </View>

        <View style={styles.viewListContainer}>
          <View style={styles.viewList}>
            <SettingItem
              icon={<FontAwesomeIcon icon={faPowerOff} size={22} color={colors.DarkRed}/>}
              title='Logout'
              iconBackgroundColor={colors.LightRed}
              onPress={() => {
                logout();
              }}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default SettingScreen    