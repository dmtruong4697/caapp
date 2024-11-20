import React, { useEffect, useState } from 'react';
import {
  View,
  useWindowDimensions,
} from 'react-native';
import { styles } from './styles';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../../navigators/main';

interface IProps {}

const RCDashboardScreen: React.FC<IProps> = () => {

  const layout = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'Chat'>>();

  return (
    <View style={styles.viewContainer}>

    </View>
  );
};

export default RCDashboardScreen;

