import { Alert } from "react-native";
import i18n from "../i18n/i18n";

export const createTwoButtonAlert = (errorCode: string, errorCode2: string) => {
  // const title = i18n.t('alert.error_title');
  const message = i18n.t(`${errorCode}`);
  
  Alert.alert(message, "", [
    {
      text: "Cancel", 
      onPress: () => {},
      style: 'cancel',
    },
    { text: "OK", onPress: () => {} }, 
  ]);
};

export const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
}