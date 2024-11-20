import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { colors } from '../../../styles/colors';
import Button from '../../../components/button';

interface IProps {}

const ValidateEmailScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

  return (
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

      <View/>

      <Text style={styles.txtSub}>Didn't receive a code?{" "}
          <Text 
            style={[styles.txtSub, {color: colors.PrimaryColor}]} 
            onPress={() =>console.log("hehehe")}
          >Resend code</Text>
      </Text>

      <View style={styles.viewButtonGroup}>
        <Button
            title='NEXT'
            type='default'
            onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  )
}

export default ValidateEmailScreen    