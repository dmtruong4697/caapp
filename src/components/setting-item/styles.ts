import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(12),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(5),
    },

    viewImgIcon: {
        width: scale(34),
        height: scale(34),
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '400',
        color: colors.PrimaryText,
    },

    viewImgRight: {
        width: scale(30),
        height: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
})