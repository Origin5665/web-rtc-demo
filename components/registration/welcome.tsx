import React from 'react';
import Image from 'next/image'
import {Block} from "../shared/block/block";
import Logo from '../../assets/175105.svg'
import {Button} from "../shared/button/button";


const WelcomeBlock = () => {
    return (
        <>
            <Block>
                {/*<Image height='60px' src={Logo} alt="Application logo" />*/}
                <h2>Welcome to Web-RTC Demo!</h2>
                <p>We’re working hard to get Clubhouse ready for everyone! While we wrap up the finishing youches, we’re
                    adding people gradually to make sure nothing breaks.</p>
                <Button classname="main-button" action={() => {}} name={"Next"} />
            </Block>
        </>
    );
};

export default WelcomeBlock;

