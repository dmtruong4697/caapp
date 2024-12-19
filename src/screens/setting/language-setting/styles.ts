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

    viewButtonGroup: {
        width: '100%',
        gap: scale(10),
        flexDirection: 'column',

        marginBottom: scale(40),
        marginTop: scale(30),

        position: 'absolute',
        bottom: 0,
    },

    viewLanguageList: {
        width: '100%',
        flexDirection: 'column',
        gap: scale(12),
    },

    imgFlag: {
        width: 42,
        height: 28,
    },
   
})