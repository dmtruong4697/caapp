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

    txtTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.PrimaryText,

        marginTop: scale(10),
        marginBottom: scale(35),
    },

    txtSub: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondText,
        marginBottom: scale(15),
    },

    txtDescription: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.SecondText,
        textAlign: 'center',
        marginBottom: scale(20),
    },

    imgDone: {
        width: scale(250),
        height: scale(250),
        alignSelf: 'center',
        marginBottom: scale(30),
    },

    viewButtonGroup: {
        width: '100%',
        gap: scale(10),
        flexDirection: 'column',

        marginBottom: scale(40),
        marginTop: scale(30),
    },
})