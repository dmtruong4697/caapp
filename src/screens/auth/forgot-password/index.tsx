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
import LoadingOverlay from '../../../components/loading-overlay';

interface IProps {}

const ForgotPasswordScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <LoadingOverlay visiable={isLoading}/>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='BACK'
          title=''
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <Text style={styles.txtTitle}>Sign in to </Text>
      
      <View style={styles.viewFormContainer}>
       
      </View>

    </SafeAreaView>
    </View>
  )
}

export default ForgotPasswordScreen    