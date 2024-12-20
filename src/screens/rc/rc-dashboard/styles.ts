import { StyleSheet } from "react-native";
import { scale } from "../../../styles/scale";
import { colors } from "../../../styles/colors";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        // padding: scale(12),
        // marginHorizontal: scale(12),
    },

    viewHeader: {
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingVertical: scale(10),
        marginBottom: scale(20),
    },

    txtSetting: {
        fontSize: 21,
        fontWeight: '400',
        color: colors.White,
    },

    viewSelectContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: scale(20),
    },

    viewSelectItem: {
        width: '48%',
        height: scale(180),
        borderRadius: scale(26),
        backgroundColor: colors.White,
        padding: scale(20),
        flexDirection: 'column',
        alignItems: 'center',
    },

    imgUser: {
        width: scale(50),
        height: scale(50),
    },

    txtUser: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.PrimaryText,
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'column',
        gap: scale(10),

        position: 'absolute',
        bottom: scale(100),
    },

    viewSearchContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btnSearch: {
        width: '80%',
        height: scale(40),
        borderRadius: radius.Radius2,
        backgroundColor: colors.BasicOrange,

        justifyContent: 'center',
        alignItems: 'center',
    },

    txtSearchButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.White,
    },

    viewCount: {
        width: '20%',
        height: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtCount: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.White,
    },

    btnCurrentChannel: {
        width: '100%',
        height: scale(60),
        backgroundColor: colors.White,
        borderRadius: radius.Radius2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtCurrentChannel: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.PrimaryText,
    },
})