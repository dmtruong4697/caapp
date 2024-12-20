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
import { loginRequest, loginSuccess } from '../../../store/actions/auth/login';
import { RootState } from '../../../store';
import LoadingOverlay from '../../../components/loading-overlay';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileInfoRequest } from '../../../store/actions/profile/profile';

interface IProps {}

const LoginScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const {
      register,
      handleSubmit,
      control,
      getValues,
      formState: { errors },
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async()=> {
      setIsLoading(true);
      const { email, password } = getValues();
      dispatch(loginRequest(email, password, ""));
    };

    const authState = useSelector((state: RootState) => state.auth);
    const profileState = useSelector((state: RootState) => state.profile);

    useEffect(() => {
      if (profileState.profile?.account_status == "1") {
        navigation.navigate("Home")
        setIsLoading(false);
      } else if (profileState.profile?.account_status == "0") {
        navigation.navigate("FirstInfoInput")
        setIsLoading(false);
      }
      setIsLoading(false);
    }, [profileState, authState]) 

    //////////////////////////////////////////google auth////////////////////////////////////////////////////////
    const signInWithGoogle = async () => {
      try {
        await GoogleSignin.hasPlayServices(); 
        const userInfo = await GoogleSignin.signIn(); 
        // console.log(userInfo);
        const idToken = userInfo.data?.idToken;
    
        const response = await axios.post('http://localhost:8910/oauth2/google-login', {
          token: idToken,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const data = await response.data;
        console.log("data",data);
        AsyncStorage.setItem('token', data.token);
        dispatch(loginSuccess(data.token ));
        dispatch(getProfileInfoRequest())
      } catch (error) {
        console.error('Google sign-in error:', error);
      }
    };
    //////////////////////////////////////////google auth////////////////////////////////////////////////////////

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

      <Text style={styles.txtTitle}>Sign in to 
        <Text style={[styles.txtTitle, {color: colors.DarkColor, fontWeight: 'bold'}]}> CA
          <Text style={[styles.txtTitle, {color: colors.PrimaryColor, fontWeight: 'bold'}]}>APP</Text>
        </Text>
      </Text>
      
      <View style={styles.viewFormContainer}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
          <InputField
              title='Email'
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
        {errors.email && <Text style={styles.txtError}>Email is required.</Text>}

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
                required: true,
            }}
        />
        {errors.password && <Text style={styles.txtError}>Password is required.</Text>}
      </View>

      <View style={styles.viewOption}>
        <Text
          style={styles.txtOption}
          onPress={() => {navigation.navigate("ForgotPassword")}}
        >Forgot password?</Text>

        <Text
          style={styles.txtOption}
          onPress={() => {
            Linking.openURL("https://google.com.vn/")
          }}
        >Privacy policy</Text>
      </View>

      <View style={styles.viewButtonGroup}>
        <Button
          title={t('hn-friend')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View style={styles.viewOAuthContainer}>
        <Text style={styles.txtOrSignInWith}>Or Sign In with</Text>

        <View style={styles.viewOAuth}>
          {/* facebook */}
          <TouchableOpacity
            style={styles.btnOAuth}
            onPress={() => {

            }}
          >
            <Image style={styles.imgOAuth} source={require('../../../assets/icons/social-media-platform/facebook-64px.png')}/>
          </TouchableOpacity>

          {/* google */}
          <TouchableOpacity
            style={styles.btnOAuth}
            onPress={() => {
              signInWithGoogle()
            }}
          >
            <Image style={styles.imgOAuth} source={require('../../../assets/icons/social-media-platform/google-64px.png')}/>
          </TouchableOpacity>

          {/* x */}
          <TouchableOpacity
            style={styles.btnOAuth}
            onPress={() => {

            }}
          >
            <Image style={styles.imgOAuth} source={require('../../../assets/icons/social-media-platform/x-64px.png')}/>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
    </View>
  )
}

export default LoginScreen    