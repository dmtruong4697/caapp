import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
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

interface IProps {}

const MyProfileScreen: React.FC<IProps>  = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const profileState = useSelector((state: RootState) => state.profile)

  const isFocused = useIsFocused();
  useEffect(() => {
    // dispatch(getProfileInfoRequest());
  },[]);

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewImageContainer}>
        <View style={styles.viewCoverImage}>
          <Image style={styles.imgCover} source={{uri: profileState.profile?.cover_image}}/>
        </View>

        <View style={styles.viewAvatarImage}>
          <Image style={styles.imgAvatar} source={{uri: profileState.profile?.avatar_image}}/>
        </View>
      </View>

      <View style={styles.viewNameContainer}>
        <Text style={styles.txtFullName}>{profileState.profile?.first_name} {profileState.profile?.middle_name} {profileState.profile?.last_name}</Text>
        <Text style={styles.txtHashtagName}>@{profileState.profile?.hashtag_name}</Text>
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

    </SafeAreaView>
    </View>
  )
}

export default MyProfileScreen    