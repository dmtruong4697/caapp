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

interface IProps {}

const AddFriendScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

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

    </SafeAreaView>
    </View>
  )
}

export default AddFriendScreen    