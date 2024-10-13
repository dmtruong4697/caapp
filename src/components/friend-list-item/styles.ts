import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(10),
        flexDirection: 'row',
        gap: scale(12),

        alignItems: 'center',
    },

    imgAvatar: {
        width: scale(40),
        height: scale(40),
        borderRadius: 1000,
    },

    viewNameContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

        gap: scale(5),
    },

    txtFullName: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.PrimaryText,
    },

    txtHashtagName: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondText,
    },

    btnCall: {
        height: scale(40),
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnVideoCall: {
        height: scale(40),
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },

})