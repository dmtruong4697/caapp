import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/button';
import InputField from '../../../components/input-field';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../../../styles/colors';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface IProps {}

const ChatListScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

  return (
    <SafeAreaView 
      style={styles.viewContainer}
    >
      <View style={styles.viewTopSearch}>
        <Text style={styles.txtCaapp}>caapp</Text>
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => {}}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size={22} color={colors.Black}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewStoryList}>

      </View>

      <View style={styles.viewChatList}>
        
      </View>
    </SafeAreaView>
  )
}

export default ChatListScreen    