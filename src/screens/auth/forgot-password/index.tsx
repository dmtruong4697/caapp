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
import TwoStatusButton from '../../../components/2-status-button';
import { forgotPasswordRequest } from '../../../store/actions/auth/forgot-password';

interface IProps {}

const ForgotPasswordScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const forgotPasswordState = useSelector((state: RootState) => state.forgotPassword);
    const [isLoading, setIsLoading] = useState(false);

    const {
      register,
      handleSubmit,
      control,
      getValues,
      formState: { errors },
    } = useForm();

    const onSubmit = async()=> {
      setIsLoading(true);
      const { email } = getValues();
      dispatch(forgotPasswordRequest(email));
    };

    useEffect(() => {
      if (forgotPasswordState.success_flg) {
        setIsLoading(false);
        const { email } = getValues();
        navigation.navigate("ValidateEmailForgotPassword", {email: email});
      } else {
        setIsLoading(false);
      }
    },[forgotPasswordState.success_flg])

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

      <Text style={styles.txtTitle}>{t('forgot_password_screen_title')}</Text>

      <Image style={styles.imgForgotPassword} source={require('../../../assets/illustrations/forgot-password.png')}/>
      <Text style={styles.txtDescription}>{t('forgot_password_screen_description')}</Text>
      
      <View style={styles.viewFormContainer}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
          <InputField
              title={t('common_email')}
              inputMode='email'
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
          />
          )}
          name='email'
          rules={{
              required: true,
          }}
        />
        {errors.email && <Text style={styles.txtError}>{t('validate_email_required')}</Text>}
      </View>

      <View style={styles.viewButtonGroup}>
        <Button
          title={t('common_countinue')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

    </SafeAreaView>
    </View>
  )
}

export default ForgotPasswordScreen    