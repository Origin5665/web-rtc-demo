import React from 'react';
import {Block} from "../shared/block/block";
import {Button} from "../shared/button/button";

const ActivationBlock = () => {
    return (
        <Block>
            <h2>Enter your activation code</h2>
            <form className="main-form" action="">
                <input placeholder="X" type="text"/>
                <input placeholder="X" type="text"/>
                <input placeholder="X" type="text"/>
                <input placeholder="X" type="text"/>
                <Button classname="main-button" action={() => {
                }} name={"Next"}/>
            </form>
        </Block>
    );
};
export default ActivationBlock;