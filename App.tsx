import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import MainNavigator from './src/navigators/main';
import i18n from './src/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './src/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setLayoutIfNeededOnUpdate(true);
  KeyboardManager.setEnableAutoToolbar(false);
  // KeyboardManager.setToolbarDoneBarButtonItemText("Done");
  KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
  KeyboardManager.setToolbarPreviousNextButtonEnable(false);
  KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
  KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
  KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setOverrideKeyboardAppearance(false);
  KeyboardManager.setKeyboardAppearance("default"); // "default" | "light" | "dark"
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
  KeyboardManager.isKeyboardShowing()
    .then((isShowing) => {
        // ...
    });
}

function App(): React.JSX.Element {

  // GoogleSignin.configure({
  //   androidClientId: '537208903435-r2chnosbfqo3cst7p72ts5aos6hnroja.apps.googleusercontent.com',
  //   webClientId: '537208903435-h7fvpeq8utrr1hhl4thaca6jvj4n4gv9.apps.googleusercontent.com', 
  //   scopes: ['profile', 'email'],
  // });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}

export default App;