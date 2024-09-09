import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { scale } from "../../../styles/scale";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12),
        // backgroundColor: colors.DefaultBackground,
    },

    txtTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.PrimaryText,

        marginTop: scale(20),
        marginBottom: scale(40),
    },

    txtSub: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondText,
        marginBottom: scale(15),
    },

    viewFormContainer: {
        width: '100%',
        flexDirection: 'column',
        gap: scale(12),

        marginBottom: scale(15),
    },

    viewOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: scale(15),
    },

    txtOption: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryColor,
    },

    txtError: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.ErrorText,
    },

    viewButtonGroup: {
        width: '100%',
        gap: scale(10),
        flexDirection: 'column',

        marginBottom: scale(15),
        marginTop: scale(30),
    },
})