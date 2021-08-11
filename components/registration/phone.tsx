import React from 'react';
import {Block} from '../shared/block/block';
import {Button} from '../shared/button/button';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {context} from '../../pages';

interface IPhoneProps {
    value: string;
    country: ICountry
    format: string
}

interface ICountry{
    countryCode: string
    dialCode: string
    format: string
    name: string
}

const PhoneBlock = () => {

    const [phoneValue, setPhoneValue] = React.useState<IPhoneProps>()
    const { onNextStep } = React.useContext(context)
    const isValid = !phoneValue?.value

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <Block>
            <h2>Enter your phone number</h2>
            <form onSubmit={handleSubmit} className="main-form">
                <PhoneInput
                    containerClass="main-phone-input"
                    buttonClass={"main-phone-input__button"}
                    autoFormat={true}
                    disableDropdown={true}
                    inputClass="main-phone-input__input"
                    onChange={(value, data, {}, formattedValue) => {
                        setPhoneValue({
                            ...phoneValue,
                            value: value,
                            //@ts-ignore
                            country: data,
                            format: formattedValue
                        })
                    }}
                />
                <Button classname="main-button" action={onNextStep} name={"Check"} disabled={isValid}/>
            </form>
        </Block>
    );
};
export default PhoneBlock;