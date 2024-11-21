import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";

export const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: scale(52),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.PrimaryColor,
        backgroundColor: colors.PrimaryColor,
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.White,
    },
})