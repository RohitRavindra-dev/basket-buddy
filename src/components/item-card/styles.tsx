import { StyleSheet } from "react-native";

export const itemCardStyles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        elevation: 2,
        padding: 14,
        flexDirection: 'row'
    },
    detailsCntr: {
        width: '80%',
        flexDirection: 'row'
    },
    nameBrandCntr: {
        width: '70%'
    },
    itemName: {
        fontSize: 30,
        color: '#000',
        fontWeight: '500'
    },
    brandName: {
        fontSize: 20,
        color: '#333'
    },
    quantity: {
        fontSize: 32,
        color: '#d60004'
    },
    uom:{
        fontSize: 18,
        color: '#333'
    },
    actionsCntr:{
        width: '20%',
        justifyContent: 'center'
    }
})