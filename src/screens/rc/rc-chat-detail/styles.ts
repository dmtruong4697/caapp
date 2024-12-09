import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.White,
    },

    viewHeaderContainer: {
        width: '100%',
        padding: scale(8),
        alignItems: 'center',
        flexDirection: 'row',

        backgroundColor: colors.PrimaryColor,

    },

    viewListContainer: {
        width: '100%',
        // padding: scale(8),
        alignItems: 'center',
        flex: 1,
    },

    btnHeaderUserName: {
        flex: 1,
        marginRight: scale(5),
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(5),
        paddingHorizontal: scale(8),
        // backgroundColor: 'pink'
    },

    txtHeaderUserName: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.White,
        marginLeft: scale(25),
    },

    btnHeaderMenu: {
        height: scale(36),
        width: scale(36),
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: radius.Radius1,
        // backgroundColor: 'blue'
    },

    imgHeaderAddFriend: {
        height: scale(36),
        width: scale(36),
    },

    btnGroupItem: {
        width: '100%',
        padding: scale(5),
        paddingVertical: scale(2),
        marginBottom: scale(8),
        flexDirection: 'row',
        gap: scale(5),
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    viewIcon: {
        height: scale(40),
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtButtonTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.PrimaryText,
        flex: 1,
    },

    viewButtonTitle: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: scale(0.4),
        paddingVertical: scale(8),
        borderBottomColor: colors.GrayBorder,
    },

})