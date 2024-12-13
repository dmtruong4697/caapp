import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale, scaleSize } from "../../styles/scale";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        height: scale(30),
        // backgroundColor: 'pink',

        alignItems: 'center',
        flexDirection: 'row',
    },

    txtTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
        color: colors.PrimaryText,
    },

    btnSeeAll: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    txtSeeAll: {
        fontSize: 16,
        fontWeight: '300',
        color: colors.Gray,
    },

    imgRightArrow: {
        height: scale(18),
        width: scale(18),
    },
})