import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.PrimaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: scale(20),
    },

    txtAppName: {
        fontSize: 40,
        fontWeight: '600',
        color: colors.White,
        marginBottom: scale(100),
    },

    viewButtonGroup: {
        width: '95%',
        position: 'absolute',
        bottom: 0,
        marginBottom: scale(20),
        marginVertical: scale(20),
        flexDirection: 'column',
    },
})