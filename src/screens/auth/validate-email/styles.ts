import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12),
    },

    viewHeader: {
        width: '100%',
        paddingTop: scale(8),
    },

    txtTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.PrimaryText,

        alignSelf: 'center',

        marginTop: scale(0),
        marginBottom: scale(10),
        
    },

    txtSub: {
        fontSize: 16,
        fontWeight: '300',
        color: colors.PrimaryText,
        marginBottom: scale(15),
        textAlign: 'center',

        alignItems: 'center',
        justifyContent: 'center',
    },

    viewImageEmail: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgEmail: {
        width: scale(160),
        height: scale(160),
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'column',
    },

    viewCodeInput: {
        width: '100%',
        marginTop: scale(20),
        marginBottom: scale(20),
    },

    pinCodeContainer: {
        borderColor: colors.GrayBorder, 
        borderWidth: 2, 
        borderRadius: 8,
    },

    txtTime: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PrimaryText,
        alignSelf: 'center',

        marginBottom: scale(30),
    },
})