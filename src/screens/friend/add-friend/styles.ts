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
        height: scale(200),
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewQRCodeBorder: {
        width: scale(200),
        height: scale(200),

        borderRadius: radius.Radius2,
        alignItems: 'center',
        justifyContent: 'center',

        padding: scale(10),
    },

    viewGroup: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: scale(20),
    },

    viewGroupItem: {
        width: '100%',
        padding: scale(5),
        paddingVertical: scale(10),
        flexDirection: 'row',
        gap: scale(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale(18),
    },

    btnGroupItem: {
        width: '100%',
        padding: scale(5),
        paddingVertical: scale(2),
        marginBottom: scale(8),
        flexDirection: 'row',
        gap: scale(5),
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    viewHashtagNameInputContainer: {
        width: '90%',
    },

    viewName: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        gap: scale(3),

        marginBottom: scale(15),
    },

    txtName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PrimaryText,
    },

    txtHashtagName: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.SecondText,
    },

    btnSearch: {
        width: scale(48),
        height: scale(48),
        borderRadius: radius.Radius1,

        justifyContent: 'center',
        alignItems: 'center',
    },

    txtSearchError: {
        paddingHorizontal: scale(5),
        fontSize: 16,
        fontWeight: '400',
        color: colors.ErrorText,
    },

    viewIcon: {
        height: scale(40),
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtButtonTitle: {
        fontSize: 18,
        fontWeight: '300',
        color: colors.PrimaryText,
    },

    viewButtonTitle: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: scale(0.4),
        paddingVertical: scale(8),
        borderBottomColor: colors.GrayBorder,
    },
})