import React from 'react';
import {Block} from "../shared/block/block";
import {Button} from "../shared/button/button";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface IPhoneProps {
    value: string;
    country: {}
    format: string
}

const PhoneBlock = () => {

    const [phoneValue, setPhoneValue] = React.useState<IPhoneProps>({} as IPhoneProps)

    const isValid = !phoneValue.value

    return (
        <Block>
            <h2>Enter your phone number</h2>
            <form className="main-form">
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
                            country: data,
                            format: formattedValue
                        })
                    }}
                />

                <Button classname="main-button" action={() => {
                }} name={"Check"} disabled={isValid}/>
            </form>
        </Block>
    );
};
export default PhoneBlock;