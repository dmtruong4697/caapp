import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { scale } from "../../../styles/scale";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12),
    },

    viewHeader: {
        width: '100%',
        paddingTop: scale(8),
    },

    txtTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: colors.PrimaryText,
        marginTop: scale(0),
        marginBottom: scale(20),
    },

    viewFormContainer: {
        flexDirection: 'column',
        width: '100%',
        gap: scale(12),
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'column',
    },

    txtError: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.ErrorText,
    },
})