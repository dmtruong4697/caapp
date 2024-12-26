import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
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
import { RootStackParamList } from '../../../navigators/main';
import { forgotPasswordChangePasswordRequest } from '../../../store/actions/auth/forgot-password-change-password';

interface IProps {}

const ForgotPasswordChangePasswordScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const route = useRoute<RouteProp<RootStackParamList, 'ForgotPasswordChangePassword'>>();
    const {email} = route.params;

    const forgotPasswordChangePasswordState = useSelector((state: RootState) => state.forgotPasswordChangePassword);
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
      const { password } = getValues();
      dispatch(forgotPasswordChangePasswordRequest(email, password));
    };

    useEffect(() => {
      if (forgotPasswordChangePasswordState.success_flg) {
        setIsLoading(false);
        navigation.navigate("ForgotPasswordSuccessChangePassword");
      } else {
        setIsLoading(false);
      }
    },[forgotPasswordChangePasswordState.success_flg])

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

      {/* <Text style={styles.txtTitle}>Forgot Password</Text> */}

      <Image style={styles.imgForgotPassword} source={require('../../../assets/illustrations/forgot-password.png')}/>
      <Text style={styles.txtDescription}>{t('forgot_password_change_password_screen_title')}</Text>
      
      <View style={styles.viewFormContainer}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
          <InputField
              title={t('common_password')}
              inputMode='text'
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
              isPassword
          />
          )}
          name='password'
          rules={{
              required: true,
          }}
        />
        {errors.password && <Text style={styles.txtError}>{t('validate_password_required')}</Text>}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
          <InputField
              title={t('common_confirm_password')}
              inputMode='text'
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
              isPassword
          />
          )}
          name='confirmPassword'
          rules={{
              required: true,
          }}
        />
        {errors.confirmPassword && <Text style={styles.txtError}>{t('validate_confirm_password_required')}</Text>}
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

export default ForgotPasswordChangePasswordScreen    