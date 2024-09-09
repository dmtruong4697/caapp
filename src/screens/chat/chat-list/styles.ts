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
        height: scale(38),
        paddingHorizontal: scale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scale(10),
    },

    txtCaapp: {
        fontSize: 34,
        fontWeight: '600',
        color: colors.PrimaryColor,
    },

    btnSearch: {
        width: scale(30),
        height: scale(30),
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
        backgroundColor: 'blue',
    }
})