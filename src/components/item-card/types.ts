export type ItemDetails = {
    name: string,
    brand: string,
    quantity: number,
    uom: string,
}

export type ItemCardProps = {
    itemDetails: ItemDetails,
    index: number,
    onClickRcvHandler: (index:number)=>any
}