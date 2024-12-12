import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";
import { colors } from "../../styles/colors";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        paddingVertical: scale(12),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10),
    },

    viewImgIcon: {
        width: scale(36),
        height: scale(36),
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: radius.Radius1,
        backgroundColor: colors.LightColor,
    },

    txtTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '300',
        color: colors.PrimaryText,
    },

    viewImgRight: {
        width: scale(30),
        height: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
})