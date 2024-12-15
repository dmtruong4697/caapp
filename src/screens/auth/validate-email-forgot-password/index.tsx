import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { colors } from '../../../styles/colors';
import Button from '../../../components/button';
import { OtpInput } from "react-native-otp-entry";
import TwoStatusButton from '../../../components/2-status-button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { RootStackParamList } from '../../../navigators/main';
import { validateEmailRequest } from '../../../store/actions/auth/validate-email';
import { resendCodeRequest } from '../../../store/actions/auth/resend-code';
import { secondToMinuteConvert } from '../../../utils/date-time/date-time-convert';
import LoadingOverlay from '../../../components/loading-overlay';

interface IProps {}

const ValidateEmailForgotPasswordScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const route = useRoute<RouteProp<RootStackParamList, 'ValidateEmail'>>();
    const {email, password} = route.params;

    const validateEmailState = useSelector((state: RootState) => state.validateEmail);
    const resendCodeState = useSelector((state: RootState) => state.resendCode);

    const [validateCode, setValidateCode] = useState("");
    const [timeLeft, setTimeLeft] = useState<number>(0); 
    const [isCounting, setIsCounting] = useState<boolean>(false); 
  
    useEffect(() => {
      let timer: NodeJS.Timeout | undefined;
      if (isCounting && timeLeft > 0) {
        timer = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000); 
      } else if (timeLeft === 0) {
        setIsCounting(false); 
      }
  
      return () => {
        if (timer) clearInterval(timer);
      };
    }, [isCounting, timeLeft]);

    const startCountdown = () => {
      setTimeLeft(5 * 60);
      setIsCounting(true);
    };

    useEffect(() => {
      startCountdown();
    },[]);

    useEffect(() => {
      if (resendCodeState.success_flg == true) {
        startCountdown();
      }
    },[resendCodeState.success_flg])

    const [isLoading, setIsLoading] = useState(false);
    const validateEmail = async()=> {
      setIsLoading(true);
      dispatch(validateEmailRequest(email, password, validateCode));
      console.log(email);
      setIsLoading(false);
    };

    const resendEmailValidateCode = async() => {
      setIsLoading(true);
      dispatch(resendCodeRequest(email));
      setIsLoading(false);
    }

    useEffect(() => {
      if (validateEmailState.success_flg == true) {
        navigation.navigate('FirstInfoInput');
      }
    },[validateEmailState.success_flg])

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

      <Text style={styles.txtTitle}>Verify email</Text>

      <View style={styles.viewImageEmail}>
        <Image style={styles.imgEmail} source={require('../../../assets/illustrations/mail-sent.png')}/>
      </View>

      <Text style={styles.txtSub}>An email with a verification code has been sent to your email</Text>

      <View style={styles.viewCodeInput}>
        <OtpInput
          numberOfDigits={6}
          focusColor={colors.DarkColor}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => {setValidateCode(text)}}
          onFilled={(text) => {setValidateCode(text)}}
          textInputProps={{
            accessibilityLabel: "Validate Code",
          }}
          theme={{
            // containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            // pinCodeTextStyle: styles.pinCodeText,
            // focusStickStyle: styles.focusStick,
            // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
      </View>

      <Text style={styles.txtTime}>{secondToMinuteConvert(timeLeft)}</Text>

      <Text style={styles.txtSub}>Didn't receive a code?{" "}
          <Text 
            style={[styles.txtSub, {color: colors.DarkColor}]} 
            onPress={() => {
              resendEmailValidateCode();
            }}
          >Resend code</Text>
      </Text>

      <View style={styles.viewButtonGroup}>
        <TwoStatusButton
            title='NEXT'
            onPress={() => {
              validateEmail();
            }}
            disabled={!(validateCode.length == 6)}
        />
      </View>
    </SafeAreaView>
    </View>
  )
}

export default ValidateEmailForgotPasswordScreen    