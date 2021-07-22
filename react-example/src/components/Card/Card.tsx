import React, {FC} from "react";
import {ECardVariant, ICard} from "../../types/types";

const Card: FC<ICard> = ({clickButton, width, height, children, variant}) => {
    return (
        <div style={{
            width: width,
            height: height,
            border: variant === ECardVariant.bordered ? '1px solid black' : 'none',
            backgroundColor: variant === ECardVariant.bordered ? 'none' : '#9eb9ff'}}
        onClick={clickButton}>
            <h3>This is card</h3>
            {children}
        </div>
    )
}

export default Card;