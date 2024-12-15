import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { scale } from "../../../styles/scale";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12),
    },

    viewHeader: {
        width: '100%',
        paddingTop: scale(10),
        paddingBottom: scale(3),
    },

    txtTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.PrimaryText,

        marginTop: scale(0),
        marginBottom: scale(35),
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

    txtError: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.ErrorText,
    },

    viewButtonGroup: {
        width: '100%',
        gap: scale(10),
        flexDirection: 'column',

        marginBottom: scale(40),
        marginTop: scale(30),
    },

    imgForgotPassword: {
        width: scale(220),
        height: scale(220),
        alignSelf: 'center',
        marginBottom: scale(30),
    },

    txtDescription: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.PrimaryText,
        textAlign: 'center',
        marginBottom: scale(20),
    },
})