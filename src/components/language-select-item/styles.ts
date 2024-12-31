import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(12),
    },

    txtTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})