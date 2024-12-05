import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        paddingHorizontal: scale(4),
        flexDirection: 'row',
        gap: scale(12),

        alignItems: 'center',
    },

    viewAvatar: {
        width: scale(50),
        height: scale(50),
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgAvatar: {
        width: scale(50),
        height: scale(50),
        borderRadius: 1000,

        backgroundColor: colors.GrayBackground,
    },

    viewContentContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: scale(2),
    },

    viewNameAndTime: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },

    viewMessageAndStatus: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    txtName: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.PrimaryText,
    },

    txtTime: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.SecondText,
    },

    txtMessage: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})