import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../styles/colors';
import { RootState } from '../../../store';
import { getProfileInfoRequest, resetProfileInfo } from '../../../store/actions/profile/profile';
import { getLanguageListRequest } from '../../../store/actions/constant-data/get-language-list';
import { profileInfoRequest } from '../../../store/actions/profile/profile-info';

interface IProps {}

const MyProfileScreen: React.FC<IProps>  = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const profileInfoState = useSelector((state: RootState) => state.profileInfo)

  const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(profileInfoRequest());
  },[]);

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <ScrollView style={styles.viewContainer}>
      <View style={styles.viewImageContainer}>
        {/* <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {

          }}
        >
          <Image style={styles.imgBack} source={require('../../../assets/icons/navigate/cancel-64px.png')}/>
        </TouchableOpacity> */}

        <View style={styles.viewCoverImage}>
          <Image style={styles.imgCover} source={{uri: profileInfoState.profile?.cover_image}}/>
        </View>

        <View style={styles.viewAvatarImage}>
          <Image style={styles.imgAvatar} source={{uri: profileInfoState.profile?.avatar_image}}/>
        </View>
      </View>

      <View style={styles.viewNameContainer}>
        <Text style={styles.txtFullName}>{profileInfoState.profile?.first_name} {profileInfoState.profile?.middle_name} {profileInfoState.profile?.last_name}</Text>
        <Text style={styles.txtHashtagName}>@{profileInfoState.profile?.hashtag_name}</Text>
      </View>

      <View style={styles.viewFriendContainer}>
        <TouchableOpacity style={styles.viewItem}>
          <Text style={styles.txtTop}>123</Text>
          <Text style={styles.txtBottom}>posts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewItem}>
          <Text style={styles.txtTop}>123</Text>
          <Text style={styles.txtBottom}>friends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewItem}>
          <Text style={styles.txtTop}>123</Text>
          <Text style={styles.txtBottom}>likes</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </View>
  )
}

export default MyProfileScreen    