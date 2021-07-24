import React from 'react';
import Image from "next/image";
import Logo from "../../assets/175105.svg";
import {Button} from "../shared/button/button";
import {Block} from "../shared/block/block";

const NameBlock = () => {
    return (
        <Block>
            <h2>What’s your full name? </h2>
            <form className="main-form" action="">
                <input placeholder="Put your full name" type="text"/>
                <Button classname="main-button" action={() => {
                }} name={"Next"}/>
            </form>
        </Block>
    );
};

export default NameBlock;