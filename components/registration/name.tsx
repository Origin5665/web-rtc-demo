import React from 'react';
import {Button} from '../shared/button/button';
import {Block} from '../shared/block/block';
import {context} from '../../pages';

const NameBlock = () => {
    const { onNextStep } = React.useContext(context);
    const [value, setValue] = React.useState<string>('');
    const isDisabled = value === '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNextStep();
    };

    return (
        <Block>
            <h2>What’s your full name? </h2>
            <form onSubmit={handleSubmit} className="main-form">
                <input value={value} onChange={e => setValue(e.target.value)} placeholder="Put your full name" type="text"/>
                <Button classname="main-button" action={() => {
                }} name={"Next"} disabled={isDisabled}/>
            </form>
        </Block>
    );
};

export default NameBlock;