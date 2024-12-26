import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/input-field';
import { colors } from '../../../styles/colors';
import Button from '../../../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { regex } from '../../../utils/vaidate/regex';
import TwoStatusButton from '../../../components/2-status-button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { registerRequest, resetRegisterState } from '../../../store/actions/auth/register';
import LoadingOverlay from '../../../components/loading-overlay';

interface IProps {}

const SignUpScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const registerState = useSelector((state: RootState) => state.register);

    const {
      register,
      handleSubmit,
      control,
      getValues,
      formState: { errors },
    } = useForm();
  
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async(data: any)=> {
      setIsLoading(true);
      const { email, password } = getValues();
      dispatch(registerRequest(email, password));
      console.log(getValues());
    };

    useEffect(() => {
      if(registerState.success_flg == true) {
        dispatch(resetRegisterState());
        setIsLoading(false);
        navigation.navigate("ValidateEmail", {
          email: getValues().email,
          password: getValues().password,
        })
      } else {
        setIsLoading(false);
      }
    },[registerState.success_flg])
  
  const [isCheck, setIsCheck] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <LoadingOverlay visiable={isLoading}/>
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

      <View style={styles.viewFormContainer}>
        <Text style={styles.txtTitle}>{t('sign_up_screen_title')}</Text>

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title={t('common_email')}
                inputMode='email'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                // isPassword
            />
            )}
            name='email'
            rules={{
                required: t('validate_email_required'),
                pattern: {
                  value: regex.Email, 
                  message: t('validate_email_invalid'),
              },
            }}
        />
        {errors.email && <Text style={styles.txtError}>{errors.email.message?.toString()}</Text>}

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
                required: t('validate_password_required'),
                minLength: {
                    value: 6,
                    message: t('validate_password_length'),
                },
            }}
        />
        {errors.password && <Text style={styles.txtError}>{errors.password.message?.toString()}</Text>}

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
                required: t('validate_confirm_password_required'),
                validate: (value) =>
                    value === getValues('password') || t('validate_password_match'),
            }}
        />
        {errors.confirmPassword && <Text style={styles.txtError}>{errors.confirmPassword.message?.toString()}</Text>}
      </View>

      <View style={styles.viewTerm}>
          <TouchableOpacity
              style={[styles.viewCheck, {
                  backgroundColor: (isCheck)? colors.PrimaryColor: colors.White,
                  borderColor: (isCheck)? colors.PrimaryColor: colors.GrayBorder,
              }]}
              onPress={() => {
                  setIsCheck(!isCheck);
              }}
          >
              <FontAwesomeIcon icon={faCheck} style={styles.imgCheck} size={18} color={colors.White}/>
          </TouchableOpacity>

          <Text style={styles.txtTerm}>{t('sign_up_screen_term1')} <Text style={[styles.txtTerm, {color: colors.DarkColor}]}>{t('sign_up_screen_term2')}</Text> {t('sign_up_screen_term3')} <Text style={[styles.txtTerm, {color: colors.DarkColor}]}>{t('sign_up_screen_term4')}</Text></Text>
      </View>

      <View style={styles.viewButtonGroup}>
        <TwoStatusButton
            title={t('common_next')}
            onPress={handleSubmit(onSubmit)}
            disabled={errors.email || errors.password || errors.confirmPassword || !isCheck}
        />
      </View>
    </SafeAreaView>
    </View>
  )
}

export default SignUpScreen    