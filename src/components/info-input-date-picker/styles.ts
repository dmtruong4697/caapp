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
        width: '24%',
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
        justifyContent: 'center',
    },

    txtDate: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.InputText,
    }

})