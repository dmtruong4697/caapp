import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        backgroundColor: colors.DefaultBackground,
        borderRadius: radius.Radius1,

        padding: scale(10),
        flexDirection: 'row',
        gap: scale(12),
    },

    imgAvatar: {
        height: scale(74),
        width: scale(74),
        borderRadius: 1000,
        backgroundColor: colors.GrayBackground,
    },

    viewInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    viewNameContainer: {
        width: '100%',
        flexDirection: 'column',
    },

    txtFullName: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.PrimaryText,
    },

    txtHashtagName: {
        fontSize: 14,
        fontWeight: '300',
        color: colors.SecondText,
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btnButton: {
        width: '48%',
        height: scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.Radius1,
        backgroundColor: colors.LightColor,
    },

    btnUndoRequestButton: {
        width: '48%',
        height: scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.Radius1,
        backgroundColor: colors.GrayBackground,
    },

    txtButton: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})