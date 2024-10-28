import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { faAngleLeft, faBars, faFaceSmile, faPaperPlane, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../../../styles/colors';

interface IProps {}

const ChatScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

    const [messageText, setMessageText] = useState("");

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeaderContainer}>
        <TouchableOpacity
            style={styles.btnHeaderMenu}
            onPress={() => {
                navigation.goBack()
            }}
        >
            <FontAwesomeIcon icon={faAngleLeft} size={22} color={colors.White}/>
        </TouchableOpacity>

       <Pressable 
        style={styles.btnHeaderUserName}
        onPress={() => {

        }}
        >
            <Text style={styles.txtHeaderUserName}>Tìm kiếm</Text>
        </Pressable>

        <TouchableOpacity
            style={styles.btnHeaderMenu}
            onPress={() => {
                
            }}
        >
            <FontAwesomeIcon icon={faBars} size={22} color={colors.White}/>
        </TouchableOpacity>
      </View>

      {/* bottom view */}
      <View style={styles.viewBottomContainer}>
        <TouchableOpacity
            style={styles.btnBottom}
            onPress={() => {
                
            }}
        >
            <FontAwesomeIcon icon={faFaceSmile} size={24} color={colors.Gray}/>
        </TouchableOpacity>

        <View style={styles.viewTextInputContainer}>
          <TextInput
            placeholder='Tin nhắn'
            placeholderTextColor={colors.PlaceholderText}
            style={styles.txtMessageInput}
            onChangeText={(text) => {
              setMessageText(text);
            }}
          />
        </View>
        {
          (messageText != "") && 
          <TouchableOpacity
            style={styles.btnSend}
            onPress={() => {

            }}
          >
            <FontAwesomeIcon icon={faPaperPlane} size={24} color={colors.Gray}/>
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default ChatScreen    