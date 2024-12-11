import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12),
    },

    viewTopSearch: {
        width: '100%',
        paddingVertical: scale(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scale(15),
    },

    txtCaapp: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.PrimaryText,
    },

    btnSearch: {
        width: scale(28),
        height: scale(28),
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewStoryList: {
        width: '100%',
        height: scale(60),
        backgroundColor: 'pink',
        marginBottom: scale(10),
    },

    viewChatList: {
        flex: 1,
        // paddingHorizontal: scale(10),
        // backgroundColor: 'pink',
    },

    viewChatListTitle: {
        width: '100%',
        paddingVertical: scale(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scale(10),
    },

    txtChatListTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.PrimaryText,
    },

    btnChatListOption: {
        height: scale(20),
        width: scale(20),
        borderRadius: 5,

        alignItems: 'center',
        justifyContent: 'center',
    },

    viewEmpty: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(150),
    },

    txtEmpty: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondText,
        textAlign: 'center',
    },

    imgEmpty: {
        width: scale(100),
        height: scale(100),
        marginBottom: scale(20),
    },

    imgCaapp: {
        height: scale(30),
        width: scale(90),
        resizeMode: 'contain',
    },

    viewProfileCard: {
        width: '100%',
        borderRadius: radius.Radius2,
    },

    viewLinnear: {
        width: '100%',

        padding: scale(15),
        flexDirection: 'row',
        gap: scale(10),
        alignItems: 'center',

        borderRadius: radius.Radius2,
    },

    imgAvavtar: {
        width: scale(60),
        height: scale(60),
        backgroundColor: colors.GrayBackground,
        borderRadius: 1000,
    },

    viewNameContainer: {
        flexDirection: 'column',
        gap: scale(6),
        flex: 1,
    },

    txtFullName: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.PrimaryText,
    },

    txtHashtagName: {
        fontSize: 16,
        fontWeight: '300',
        color: colors.PrimaryText,
    },

    viewImageRight: {
        width: scale(24),
        height: scale(24),
        justifyContent: 'center',
        alignItems: 'center',
    },
})