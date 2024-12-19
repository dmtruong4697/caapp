import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        // paddingVertical: scale(6),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10),
    },

    viewImgIcon: {
        width: scale(42),
        height: scale(42),
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewTitle: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: scale(6),

        borderBottomWidth: scale(0.6),
        borderBottomColor: colors.GrayBorder,
    },

    txtTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '300',
        color: colors.PrimaryText,
    },

    viewImgSelect: {
        width: scale(30),
        height: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
})