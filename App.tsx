import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigators/main';
import i18n from './src/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './src/store';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setLayoutIfNeededOnUpdate(true);
  KeyboardManager.setEnableAutoToolbar(true);
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