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

        marginBottom: scale(40),
        marginTop: scale(30),
    },

    viewOAuthContainer: {
        flexDirection: 'column',
        width: '100%',
        gap:  scale(20),
    },

    txtOrSignInWith: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondText,
    },

    viewOAuth: {
        width: '100%',
        flexDirection: 'row',
        gap: scale(30),
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    btnOAuth: {
        width: scale(76),
        height: scale(48),
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: radius.Radius1,
        borderWidth: 1,
        borderColor: colors.PrimaryBorder,
        backgroundColor: colors.White,
    },

    imgOAuth: {
        width: scale(24),
        height: scale(24),
    },

    imgCaapp: {
        height: scale(20),
        width: scale(50),
        resizeMode: 'contain',
    },
})