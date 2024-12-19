import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: scale(20),
    },

    btnContainer: {
        width: scale(24),
        height: scale(24),
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconCancel: {
        width: scale(30),
        height: scale(30),
    },

    iconBack: {
        width: scale(32),
        height: scale(32),
    },

    iconOption: {
        width: scale(34),
        height: scale(34),
    },

    txtTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})