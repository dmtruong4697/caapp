import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user/user-info';

interface IProps {
    userInfo?: any
}

const SuggestUserItem: React.FC<IProps> = ({userInfo}) => {

  return (
    <View style={styles.viewContainer}>
        <TouchableOpacity
            style={styles.imgAvatar}
            onPress={() => {}}
        >
            <Image style={styles.imgAvatar} source={{uri: userInfo!.avatar_image}}/>
        </TouchableOpacity>

        <View style={styles.viewInfo}>
            <View style={styles.viewNameContainer}>
                <Text style={styles.txtFullName}>{userInfo!.first_name} {userInfo!.middle_name} {userInfo!.last_name}</Text>
                <Text style={styles.txtHashtagName}>@{userInfo!.hashtag_name}</Text>
            </View>

            <View style={styles.viewButtonGroup}>
                <TouchableOpacity 
                    style={styles.btnButton}
                    onPress={() => {}}
                >
                    <Text style={[styles.txtButton]}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnButton}
                    onPress={() => {}}
                >
                    <Text style={[styles.txtButton]}>Send Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SuggestUserItem