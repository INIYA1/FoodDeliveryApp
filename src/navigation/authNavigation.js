import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SigninWelcomeScreen from "../screens/authScreens/SigninWelcomeScreen";
import { SignInScreen } from "../screens/authScreens/SigninScreen";
import HomeScreen from "../screens/HomeScreen";

const Auth = createStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen name='SigninWelcomeScreen' component={SigninWelcomeScreen} options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }} />
            <Auth.Screen name='SigninScreen' component={SignInScreen} options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }} />
              <Auth.Screen name='HomeScreen' component={HomeScreen} options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }} />
        </Auth.Navigator>
    )
}
