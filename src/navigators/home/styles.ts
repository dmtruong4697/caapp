import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    test: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,

        backgroundColor: colors.PrimaryColor,
        borderRadius: 10,
    },

    rcCenterButton: {
        width: scale(50),
        height: scale(50),

        borderRadius: radius.Radius1,
        backgroundColor: colors.PrimaryColor,

        alignItems: 'center',
        justifyContent: 'center',
    },
})