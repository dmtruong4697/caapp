import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(3),

        flexDirection: 'row',
    },

    viewTitle: {
        width: '26%',
        justifyContent: 'center',
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryText,
    },

    viewInputContainer: {
        width: '74%',
        justifyContent: 'center',
        flexDirection: 'row',

        borderBottomWidth: scale(1),
        borderBottomColor: colors.GrayBorder,
    },

    inputField: {
        flex: 1,
        padding: scale(8),

        fontSize: 16,
        fontWeight: '400',
        color: colors.InputText,
    },

    viewCheck: {
        width: scale(26),
        height: scale(26),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: scale(8),
    },

    imgCheck: {
        width: scale(24),
        height: scale(24),
    },

})