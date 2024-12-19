import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    viewImageContainer: {
        width: '100%',
        height: scale(200),
        flexDirection: 'column',
        alignItems: 'center',

    },

    viewCoverImage: {
        width: '100%',
        height: scale(140),
        backgroundColor: 'pink'
    },

    imgCover: {
        width: '100%',
        height: scale(140),
    },

    viewAvatarImage: {
        width: scale(140),
        height: scale(140),
        borderRadius: 1000,
        borderWidth: scale(3),
        borderColor: colors.White,

        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: scale(0),

        backgroundColor: 'green'
    },

    imgAvatar: {
        width: scale(134),
        height: scale(134),

        borderRadius: 1000,
    },

    viewNameContainer: {
        width: '100%',
        gap: scale(2),
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: scale(2),
    },

    txtFullName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.PrimaryText,
    },

    txtHashtagName: {
        fontSize: 18,
        fontWeight:'400',
        color: colors.SecondText,
    },

    viewFriendContainer: {
        width: '100%',
        flexDirection: 'row',
        gap: scale(20),

        justifyContent: 'center',
    },

    viewItem: {
        flexDirection: 'column',
        padding: scale(5),
        alignItems: 'center',
    },

    txtTop: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.DarkColor,
    },

    txtBottom: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})