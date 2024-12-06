import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: scale(0),
    },

    inputContainer: {
        width: '100%',
        height: scale(48),
        borderRadius: radius.Radius1,
        borderWidth: 1,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
    },

    viewA: {
        height: scale(48),
        width: scale(48),
        borderTopLeftRadius: radius.Radius1,
        borderBottomLeftRadius: radius.Radius1,
        borderRightWidth: 0,
        borderColor: colors.GrayBorder,

        backgroundColor: colors.PrimaryColor,

        justifyContent: 'center',
        alignItems: 'center',
    },

    txtA: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    inputField: {
        flex: 1,
        padding: scale(8),

        fontSize: 16,
        fontWeight: '400',
        color: colors.InputText,
    },
})