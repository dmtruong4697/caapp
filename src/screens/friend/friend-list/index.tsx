import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SearchUserItem from '../../../components/search-user-item';
import SearchHeader from '../../../components/search-header';
import FriendTab from './tabs/friend';
import GroupTab from './tabs/group';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../../../styles/colors';
import CustomStatusBar from '../../../components/custom-status-bar';

interface IProps {}

const FriendListScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.viewContainer}>
      <CustomStatusBar backgroundColor={colors.PrimaryColor}/>
      <SearchHeader/>

      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarIndicatorStyle: {
            backgroundColor: colors.PrimaryColor,
            height: 2, 
          },
        }}
      >
        <Tab.Screen name="Friend" component={FriendTab}/>
        <Tab.Screen name="Group" component={GroupTab} />
      </Tab.Navigator>
    </View>
  )
}

export default FriendListScreen    