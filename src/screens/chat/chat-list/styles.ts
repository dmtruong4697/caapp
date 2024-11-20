import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        // padding: scale(12),
        // marginHorizontal: scale(12),
        // backgroundColor: colors.DefaultBackground,
    },

    viewTopSearch: {
        width: '100%',
        paddingHorizontal: scale(10),
        paddingVertical: scale(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scale(5),
    },

    txtCaapp: {
        fontSize: 32,
        fontWeight: '600',
        color: colors.DarkColor,
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
        paddingHorizontal: scale(10),
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
})