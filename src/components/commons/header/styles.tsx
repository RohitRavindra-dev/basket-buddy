import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    header:{
        // height: 75,
        paddingHorizontal: 8, 
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        backgroundColor:'#0060de',
        alignItems: 'center', 
        flexDirection:'row'
    },
    logoContainer: {
        paddingTop: 8,
        paddingRight: 8
    },
    titleIconFlex:{
        flexDirection:'row',
        alignItems: 'baseline'
    },
    appTitle: {
        color: '#edfff4',
        fontSize: 26
    },
    screenTitle: {
        color: '#ffffff',
        fontSize: 21
    }
})