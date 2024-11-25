import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {}

const SuccessFirstInfoInputScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

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

      <Text style={styles.txtTitle}>SuccessFirstInfoInputScreen</Text>
    </SafeAreaView>
  )
}

export default SuccessFirstInfoInputScreen    