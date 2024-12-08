import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import ChatListScreen from '../../screens/chat/chat-list';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faHeartPulse, faHippo, faInbox, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { scale } from '../../styles/scale';
import { colors } from '../../styles/colors';
import FriendListScreen from '../../screens/friend/friend-list';
import ReceivedRequestScreen from '../../screens/friend/received-request';
import SettingScreen from '../../screens/setting/setting';
import { useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RCDashboardScreen from '../../screens/rc/rc-dashboard';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

    const screenOptions = {
        tabBarStyle:{
            height: scale(68),
            paddingBottom: scale(12),
            paddingTop: scale(12),
            position: 'absolute',
            bottom: scale(24),
            left: scale(10),
            right: scale(10),

            backgroundColor: colors.LightColor,
            borderRadius: 20,
        },

        tabBarItemStyle:{
        },

        tabBarHideOnKeyboard: true,
    };

    return (
        <Tab.Navigator
            {...{ screenOptions }}
        >
            <Tab.Screen 
                name="ChatList" 
                component={ChatListScreen} 
                options={{
                    tabBarLabel: t("hn-chat"),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.DarkColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <FontAwesomeIcon icon={faInbox} color={colors.DarkColor} size={scale(24)}/>
                        :
                        <FontAwesomeIcon icon={faInbox} color={colors.PrimaryColor} size={scale(24)}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="FriendList" 
                component={FriendListScreen} 
                options={{
                    tabBarLabel: t("hn-friend"),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.DarkColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <FontAwesomeIcon icon={faUserGroup} color={colors.DarkColor} size={scale(24)}/>
                        :
                        <FontAwesomeIcon icon={faUserGroup} color={colors.PrimaryColor} size={scale(24)}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="RCDashboard" 
                component={RCDashboardScreen} 
                options={{
                    // tabBarLabel: t("hn-friend"),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.DarkColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <View style={styles.rcCenterButton}>
                            <FontAwesomeIcon icon={faHeartPulse} color={colors.DarkColor} size={scale(24)}/>
                        </View>
                        :
                        <View style={styles.rcCenterButton}>
                            <FontAwesomeIcon icon={faHeartPulse} color={colors.PrimaryColor} size={scale(24)}/>
                        </View>
                    ),
                }}
            />

            <Tab.Screen 
                name="FriendRequest" 
                component={ReceivedRequestScreen} 
                options={{
                    tabBarLabel: t("hn-request"),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.DarkColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <FontAwesomeIcon icon={faUserPlus} color={colors.DarkColor} size={scale(24)}/>
                        :
                        <FontAwesomeIcon icon={faUserPlus} color={colors.PrimaryColor} size={scale(24)}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Setting" 
                component={SettingScreen} 
                options={{
                    tabBarLabel: t("hn-setting"),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.DarkColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <FontAwesomeIcon icon={faGear} color={colors.DarkColor} size={scale(24)}/>
                        :
                        <FontAwesomeIcon icon={faGear} color={colors.PrimaryColor} size={scale(24)}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
  }
  
  export default HomeNavigator