import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        // flex: 1,
        width: '100%',
        height: '130%',
        padding: scale(12),
    },

    viewListContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    viewFlatListContainer: {
        marginVertical: scale(10),
    },

    viewEmpty: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(20),
    },

    txtEmpty: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondText,
        textAlign: 'center',
    },

    imgEmpty: {
        width: scale(100),
        height: scale(100),
        marginBottom: scale(20),
    },
})