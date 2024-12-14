import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from 'react'
import LoginScreen from "../../screens/auth/login";
import SignUpScreen from "../../screens/auth/sign-up";
import ValidateEmailScreen from "../../screens/auth/validate-email";
import HomeNavigator from "../home";
import WelcomeScreen from "../../screens/welcome";
import ChatScreen from "../../screens/chat/chat";
import { UserInfo } from "../../models/user-info/user-info";
import RCDashboardScreen from "../../screens/rc/rc-dashboard";
import FirstInfoInputScreen from "../../screens/auth/first-info-input";
import SuccessFirstInfoInputScreen from "../../screens/auth/success-first-info-input";
import RCChatScreen from "../../screens/rc/rc-chat";
import AddFriendScreen from "../../screens/friend/add-friend";
import UserProfileScreen from "../../screens/profile/user-profile";
import QRScanScreen from "../../screens/qr/qr-scan";
import RCChatDetailScreen from "../../screens/rc/rc-chat-detail";
import { ProfileInfo } from "../../models/profile/profile-info";
import MyProfileScreen from "../../screens/profile/my-profile";
import ForgotPasswordScreen from "../../screens/auth/forgot-password";
import LanguageSettingScreen from "../../screens/setting/language-setting";

export type RootStackParamList = {
    Welcome: {};

    Login: {};

    ForgotPassword: {};

    SignUp: {};

    ValidateEmail: {
        email: string,
        password: string,
    };

    Home: {};

    Chat: {
        userInfo: UserInfo | null,
        channel_id: number | null,
        navigate_case: number,
    };

    ChatList: {};

    FriendList: {};

    FriendRequest: {};

    Setting: {};

    LanguageSetting: {};

    RCDashboard: {};

    RCChat: {};

    FirstInfoInput: {};

    SuccessFirstInfoInput: {};

    AddFriend: {};

    UserProfile: {
        userInfo: UserInfo | null,
    };

    MyProfile: {
        profile: ProfileInfo | null,
    };

    QRScan: {};

    RCChatDetail: {};

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RangeContext = createContext<any>(null);

const MainNavigator = () => {

  return (
    <Stack.Navigator 
        initialRouteName="Welcome"
    >
        <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
                headerShown: false,
                gestureEnabled: false,
            }} 
        />

        <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen 
            name="ValidateEmail" 
            component={ValidateEmailScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen
            name="Home"
            component={HomeNavigator}
            options={{
                headerShown: false,
                gestureEnabled: false, //prevent swift to go back
            }}
        />

        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="RCDashboard"
            component={RCDashboardScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="FirstInfoInput"
            component={FirstInfoInputScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="SuccessFirstInfoInput"
            component={SuccessFirstInfoInputScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="RCChat"
            component={RCChatScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="AddFriend"
            component={AddFriendScreen}
            options={{
                headerShown: false,
                // presentation: 'modal'
            }}
        />

        <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="MyProfile"
            component={MyProfileScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="QRScan"
            component={QRScanScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="RCChatDetail"
            component={RCChatDetailScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="LanguageSetting"
            component={LanguageSettingScreen}
            options={{
                headerShown: false,
            }}
        />

    </Stack.Navigator>
  )
}

export default MainNavigator