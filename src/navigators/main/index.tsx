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

export type RootStackParamList = {
    Welcome: {};

    Login: {};

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

    RCDashboard: {};

    FirstInfoInput: {};

    SuccessFirstInfoInput: {};

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

    </Stack.Navigator>
  )
}

export default MainNavigator