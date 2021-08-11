import React from 'react';
import {Block} from "../shared/block/block";
import {Button} from "../shared/button/button";
import {context} from "../../pages";

const WelcomeBlock = () => {

    const { onNextStep } = React.useContext(context)
    return (
        <>
            <Block>
                <h2>Welcome to Web-RTC Demo!</h2>
                <p>We’re working hard to get Clubhouse ready for everyone! While we wrap up the finishing youches, we’re
                    adding people gradually to make sure nothing breaks.</p>
                <Button classname="main-button" action={onNextStep} name={"Next"} />
            </Block>
        </>
    );
};

export default WelcomeBlock;

