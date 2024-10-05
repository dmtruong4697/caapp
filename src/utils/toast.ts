import Toast from 'react-native-simple-toast';

export const showSuccessToast = (message: string) => {
    Toast.showWithGravity(
        message,
        Toast.SHORT,
        Toast.BOTTOM,
    );
}