import {Button} from '../shared/button/button';
import {context} from '../../pages';
import React from 'react';
import {Block} from '../shared/block/block';

const TwitterBlock = () => {
    const {onNextStep} = React.useContext(context);

    return(
        <Block>
            <h2>Do you want import info from Twitter?</h2>
            <Button classname="main-button" action={onNextStep} name={"Import"} />
            <span>Enter info manually</span>
        </Block>
    )
}

export default TwitterBlock;

