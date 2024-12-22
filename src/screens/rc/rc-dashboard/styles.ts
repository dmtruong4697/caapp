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
        gap: scale(10),
        flexDirection: 'column',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },

    imgUser: {
        width: scale(110),
        height: scale(110),
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
        height: scale(46),
        borderRadius: radius.Radius2,
        backgroundColor: colors.BasicOrange,

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },

    txtCurrentChannel: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.PrimaryText,
    },

    viewModal: {
        width: '90%',
        padding: scale(15),
        flexDirection: 'column',
        backgroundColor: colors.White,
        borderRadius: scale(20),
    },

    btnModalItem: {
        flexDirection: 'row',
        gap: scale(20),
        marginBottom: scale(20),

        alignItems: 'center',
    },

    imgModalItem: {
        height: scale(40),
        width: scale(40),
    },

    txtModalItem: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.PrimaryText,
    },
})