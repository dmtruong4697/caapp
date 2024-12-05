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

    viewQRCode: {
        width: '100%',
        height: scale(200),
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewQRCodeBorder: {
        width: scale(200),
        height: scale(200),

        borderRadius: radius.Radius2,
        alignItems: 'center',
        justifyContent: 'center',

        padding: scale(10),
    },

    viewGroup: {
        width: '100%',
        flexDirection: 'column',
    },

    viewName: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        gap: scale(3),

        marginBottom: scale(15),
    },

    txtName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PrimaryText,
    },

    txtHashtagName: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.SecondText,
    },
})