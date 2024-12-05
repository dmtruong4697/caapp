import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: scale(0),
    },

    inputContainer: {
        width: '100%',
        height: scale(52),
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
    },

    inputField: {
        flex: 1,
        padding: scale(8),

        fontSize: 16,
        fontWeight: '400',
        color: colors.InputText,
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.GrayText,
        marginBottom: scale(8),
    },

    imgShow: {
        width: scale(24),
        height: scale(24),
        marginHorizontal: scale(8),
    }
})