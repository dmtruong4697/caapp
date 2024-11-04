import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(10),

        flexDirection: 'row',
        gap: scale(5),
    },

    viewAvatar: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },

    imgAvatar: {
        height: 30,
        width: 30,
        backgroundColor: colors.Gray,

        borderRadius: 1000,
    },

    viewMessageContent: {
        // flex: 1,
        backgroundColor: colors.LightColor,
        borderRadius: scale(12),
        padding: scale(10),
        borderWidth: 0.5,
        borderColor: colors.GrayBorder,
        maxWidth: '80%',
    },

    txtMessageContent: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.Black,
        textAlign: 'left',
    },
})