import { ColorValue, DimensionValue, View } from "react-native"


export type SpacerProps = {
    height: DimensionValue,
    color: ColorValue
}


export const Spacer = ({height, color="#fff"}:SpacerProps)=>{
    return <View style={{height:height, backgroundColor:color, width:'100%'}}></View>
}