import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/button';

interface IProps {}

const ForgotPasswordSuccessChangePasswordScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
      </View>

        <Text style={styles.txtTitle}>Forgot Password Conplete</Text>

        <Image style={styles.imgDone} source={require('../../../assets/illustrations/done.png')}/>
        <Text style={styles.txtDescription}>for got password complete description</Text>

        <View style={styles.viewButtonGroup}>
            <Button
                title='COUNTINUE'
                onPress={() => {navigation.navigate("Login")}}
            />
        </View>

    </SafeAreaView>
    </View>
  )
}

export default ForgotPasswordSuccessChangePasswordScreen    