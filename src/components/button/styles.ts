import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";
import { radius } from "../../styles/radius";

export const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: scale(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.Radius2,
        borderWidth: 1,
        borderColor: colors.PrimaryColor,
        // backgroundColor: colors.PrimaryColor,
    },

    viewContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.Radius2,
    },

    txtTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.White,
    },
})