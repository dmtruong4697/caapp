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
        paddingTop: scale(10),
        paddingBottom: scale(3),
    },

    viewQRCode: {
        width: '100%',
        height: scale(180),
        justifyContent: 'center',
    },

    viewGroup: {
        width: '100%',
        flexDirection: 'column',
    },
})