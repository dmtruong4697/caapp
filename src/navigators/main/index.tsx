import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from 'react'
import LoginScreen from "../../screens/auth/login";
import SignUpScreen from "../../screens/auth/sign-up";
import ValidateEmailScreen from "../../screens/auth/validate-email";
import HomeNavigator from "../home";
import WelcomeScreen from "../../screens/welcome";

export type RootStackParamList = {
    Welcome: {};

    Login: {};

    SignUp: {};

    ValidateEmail: {};

    Home: {};

    Chat: {};

    ChatList: {};

    FriendList: {};

    FriendRequest: {};

    Setting: {};

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
            }}
        />

    </Stack.Navigator>
  )
}

export default MainNavigator