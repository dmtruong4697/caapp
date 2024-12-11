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
import { faArrowRight, faEllipsis, faMagnifyingGlass, faPlus, faQrcode } from '@fortawesome/free-solid-svg-icons';
import CustomStatusBar from '../../../components/custom-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ChannelListItem from '../../../components/channel-list-item';
import { scale } from '../../../styles/scale';
import { getChannelListRequest, updateChannelListItem } from '../../../store/actions/channel/get-channel-list-action';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {}

const SettingScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const profileState = useSelector((state: RootState) => state.profile)

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
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
              <Text style={styles.txtFullName}>{profileState.profile?.first_name} {profileState.profile?.middle_name} {profileState.profile?.last_name}</Text>
              <Text style={styles.txtHashtagName}>@{profileState.profile?.hashtag_name}</Text>
            </View>
            <View style={styles.viewImageRight}>
              {/* <FontAwesomeIcon icon={faArrowRight} size={20} color={colors.Black}/> */}
            </View>
          </LinearGradient>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default SettingScreen    