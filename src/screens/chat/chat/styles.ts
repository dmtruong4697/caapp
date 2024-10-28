import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    viewHeaderContainer: {
        width: '100%',
        padding: scale(8),
        alignItems: 'center',
        flexDirection: 'row',

        paddingTop: scale(50),
        backgroundColor: colors.PrimaryColor,
        height: scale(85),

        position: 'absolute',
        top: 0,
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

    viewBottomContainer: {
        width: '100%',
        // height: scale(60),
        position: 'absolute',
        bottom: 0,
        padding: scale(6),
        paddingBottom: scale(18),

        flexDirection: 'row',
        gap: scale(4),

        backgroundColor: colors.White,
    },

    btnBottom: {
        height: scale(36),
        width: scale(36),
        alignItems: 'center',
        justifyContent: 'center',

    },

    btnSend: {
        height: scale(38),
        width: scale(38),
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewTextInputContainer: {
        flex: 1,
        // backgroundColor: 'pink',
        justifyContent: 'center',
    },

    txtPlaceHolder: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.PlaceholderText,
    },

    txtMessageInput: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})