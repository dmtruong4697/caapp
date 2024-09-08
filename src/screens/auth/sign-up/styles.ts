import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12)
    },

    txtTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: colors.PrimaryText,
        marginBottom: scale(20),
        marginTop: scale(10),
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

    viewTerm: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: scale(30),
        marginTop: scale(10),
        paddingRight: scale(10),
    },

    viewCheck: {
        width: scale(20),
        height: scale(20),
        borderRadius: radius.Radius1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(5),
    },

    imgCheck: {
        width: scale(18),
        height: scale(18),
    },

    txtTerm: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryText,
        lineHeight: scale(20),
    },

    txtError: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.ErrorText,
    },

})