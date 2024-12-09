import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    viewSelectContainer: {
        width: '100%',
        flexDirection: 'column',
        gap: scale(10),
        marginTop: scale(10),
        marginBottom: scale(20),
    },

    txtSelectTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.PrimaryText,
    },

    viewSelect: {
        borderWidth: scale(1),
        borderRadius: radius.Radius1,
        borderColor: colors.GrayBorder,
        padding: scale(15),
        backgroundColor: colors.White,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },

    btnCurrentChannel: {
        width: '100%',
        padding: scale(15),
        flexDirection: 'row',

        borderRadius: radius.Radius1,
        borderColor: colors.GrayBorder,
        borderWidth: 1,
        backgroundColor: colors.White,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(20),
        marginTop: scale(10),
    },

    viewButton: {
        width: '50%',
        flexDirection: 'column',
    },

    txtCount: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.PrimaryColor,
    },
})