import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(8),
        alignItems: 'center',
        flexDirection: 'row',

        // paddingTop: scale(50),
        backgroundColor: colors.PrimaryColor,
        // height: scale(85),
    },

    btnSearch: {
        flex: 1,
        marginRight: scale(5),
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(5),
        paddingHorizontal: scale(8),
        // backgroundColor: 'pink'
    },

    txtSearch: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.White,
        marginLeft: scale(25),
    },

    btnAddFriend: {
        height: scale(36),
        width: scale(36),
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: radius.Radius1,
        // backgroundColor: 'blue'
    },

    imgAddFriend: {
        height: scale(36),
        width: scale(36),
    },
})