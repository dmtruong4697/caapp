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

interface IProps {}

const LanguageSettingScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const profileState = useSelector((state: RootState) => state.profile)

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
    </SafeAreaView>
    </View>
  )
}

export default LanguageSettingScreen    