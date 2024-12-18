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
            leftButtonType='BACK'
            title=''
            onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <View style={styles.viewFormContainer}>
        <Text style={styles.txtTitle}>Create your account</Text>

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Email'
                inputMode='email'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                // isPassword
            />
            )}
            name='email'
            rules={{
                required: 'Email is required.',
                pattern: {
                  value: regex.Email, 
                  message: 'Please enter a valid email address',
              },
            }}
        />
        {errors.email && <Text style={styles.txtError}>{errors.email.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Password'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                isPassword
            />
            )}
            name='password'
            rules={{
                required: 'Password is required.',
                minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters.',
                },
            }}
        />
        {errors.password && <Text style={styles.txtError}>{errors.password.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Confirm Password'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                isPassword
            />
            )}
            name='confirmPassword'
            rules={{
                required: 'Confirm Password is required.',
                validate: (value) =>
                    value === getValues('password') || 'Passwords do not match.',
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

          <Text style={styles.txtTerm}>I certify that I am 18 years of age or older, and I agree to the <Text style={[styles.txtTerm, {color: colors.DarkColor}]}>User Agreement</Text> and <Text style={[styles.txtTerm, {color: colors.DarkColor}]}>Privacy Policy</Text></Text>
      </View>

      <View style={styles.viewButtonGroup}>
        <TwoStatusButton
            title='NEXT'
            onPress={handleSubmit(onSubmit)}
            disabled={errors.email || errors.password || errors.confirmPassword || !isCheck}
        />
      </View>
    </SafeAreaView>
    </View>
  )
}

export default SignUpScreen    