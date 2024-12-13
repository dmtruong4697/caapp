import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";

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
})