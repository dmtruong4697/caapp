import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/input-field';
import Button from '../../../components/button';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../../store/actions/auth/login';
import { RootState } from '../../../store';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { scale } from '../../../styles/scale';

interface IProps {}

const AddFriendScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const profileState = useSelector((state: RootState) => state.profile)

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='CANCEL'
          title=''
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <View style={styles.viewName}>
        <Text style={styles.txtName}>{profileState.profile?.first_name} {profileState.profile?.middle_name} {profileState.profile?.last_name}</Text>
        <Text style={styles.txtHashtagName}>@{profileState.profile?.hashtag_name}</Text>
      </View>

      <View style={styles.viewQRCode}>
        <LinearGradient 
          style={styles.viewQRCodeBorder}  
          colors={[colors.LightColor, colors.PrimaryColor]} 
        >
          <QRCode
            value={profileState.profile?.hashtag_name}
            logo={{uri: profileState.profile?.avatar_image}}
            // logo={require('../../../assets/illustrations/empty-box-256px.png')}
            logoSize={scale(50)}
            logoBorderRadius={1000}
            logoBackgroundColor='transparent'
            size={scale(178)}
            backgroundColor={'transparent'}
          />
        </LinearGradient>
      </View>

    </SafeAreaView>
    </View>
  )
}

export default AddFriendScreen    