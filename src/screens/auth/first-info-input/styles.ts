import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { scale } from "../../../styles/scale";
import { radius } from "../../../styles/radius";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.White,
    },

    viewScreenContainer: {
        flex: 1,
        padding: scale(12),
        marginHorizontal: scale(12),
    },

    viewHeader: {
        width: '100%',
        paddingTop: scale(8),
    },

    txtTitle: {
        fontSize: 30,
        fontWeight: '400',
        color: colors.PrimaryText,
        marginTop: scale(0),
        marginBottom: scale(10),
    },

    viewFormContainer: {
        flexDirection: 'column',    
        width: '100%',       
        gap: scale(22),     
        flex: 1,    
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'column',
        marginTop: scale(30),
    },

    txtError: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.ErrorText,
    },

    viewGenderSelectContainer: {
        width: '100%',
        paddingVertical: scale(8), 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    viewGenderSelect: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.White,
        paddingVertical: scale(6),
        borderWidth: scale(1),
        borderColor: colors.GrayBorder,
        borderRadius: radius.Radius1,
    },

    txtGenderSelect: {
        fontSize: 16,
        fontWeight: '500',
    },

    viewDateOfBirthPicker: {
        width: '100%',
    },
})