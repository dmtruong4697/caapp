import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import LinearGradient from 'react-native-linear-gradient';
import LoadingOverlay from '../../../components/loading-overlay';
import Button from '../../../components/button';
import LanguageSettingItem from '../../../components/language-setting-item';
import i18n from '../../../i18n/i18n';
import TwoStatusButton from '../../../components/2-status-button';

interface IProps {}

const LanguageSettingScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const profileState = useSelector((state: RootState) => state.profile)

    const [seletedLanguage, setSelectedLanguage] = useState(i18n.language)

    const changeLanguage = () => {
      i18n.changeLanguage(seletedLanguage)
      console.log(i18n.language);
    }

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <LoadingOverlay visiable={isLoading}/>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='BACK'
          title='Language'
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <View style={styles.viewLanguageList}>
        <LanguageSettingItem
          title='Vietnamese'
          icon={<Image style={styles.imgFlag} source={require('../../../assets/flag-icons/vietnam-64px.png')}/>}
          onPress={() => {setSelectedLanguage('vi')}}
          isSelected={seletedLanguage == 'vi'}
        />

        <LanguageSettingItem
          title='English'
          icon={<Image style={styles.imgFlag} source={require('../../../assets/flag-icons/united-kingdom-64px.png')}/>}
          onPress={() => {setSelectedLanguage('en')}}
          isSelected={seletedLanguage == 'en'}
        />

        <LanguageSettingItem
          title='Japanese'
          icon={<Image style={styles.imgFlag} source={require('../../../assets/flag-icons/japan-64px.png')}/>}
          onPress={() => {setSelectedLanguage('ja')}}
          isSelected={seletedLanguage == 'ja'}
        />

        <LanguageSettingItem
          title='Chinese'
          icon={<Image style={styles.imgFlag} source={require('../../../assets/flag-icons/china-64px.png')}/>}
          onPress={() => {setSelectedLanguage('zh')}}
          isSelected={seletedLanguage == 'zh'}
        />
      </View>

      <View style={styles.viewButtonGroup}>
        <TwoStatusButton
          title='SAVE'
          onPress={() => {changeLanguage()}}
          disabled={seletedLanguage == i18n.language}
        />
      </View>
    </SafeAreaView>
    </View>
  )
}

export default LanguageSettingScreen    