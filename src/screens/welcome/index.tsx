import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Button from '../../components/button';
import { colors } from '../../styles/colors';

interface IProps {}

const WelcomeScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
    <Image style={styles.imgBackground} source={require('../../assets/backgrounds/welcome-background.png')}/>
    <SafeAreaView style={styles.viewContainer}>
      {/* <Text style={styles.txtAppName}>caapp</Text> */}
      <View style={styles.viewButtonGroup}>
          <Button
              title={t('welcome_screen_get_started')}
              type='solid'
              onPress={() => {
                  navigation.navigate('SignUp');
              }}
              containerStyle={{backgroundColor: colors.White}}
          />

          <Button
              title={t('common_login')}
              type='default'
              onPress={() => {
                  navigation.navigate('Login');
              }}
          />
      </View>
    </SafeAreaView>
    </View>
  )
}

export default WelcomeScreen    