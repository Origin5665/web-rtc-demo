import React from 'react';
import {Block} from '../shared/block/block';
import {Button} from '../shared/button/button';
import {Spin} from 'antd';
import {instance} from '../../api';
import {useRouter} from 'next/router';



const ActivationBlock = () => {
    const [activationCode, setActivationCode] = React.useState(['', '', '', '']);
    const [loading, setLoading] = React.useState<boolean>(false);
    const router = useRouter();
    const isDisabled = activationCode.some(v => !v);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const indexElement = Number(e.target.getAttribute('id')) - 1;
        const valueElement = e.target.value;

        setActivationCode((prev) => {
            const newArr = [...prev];
            newArr[indexElement] = valueElement
            return newArr
        })

        if (e.target.nextSibling) {
            (e.target.nextSibling as HTMLInputElement).focus()
        }
    }

    const renderActivationBlock = () => {
        return (
            <div className="wrapper">
                <h1>Activation in progress...</h1>
                <Spin size={"large"}/>
            </div>
        );
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        await instance.get('/todos')
            .then(res => router.push('/rooms'))
            .catch(err => console.log(err))
        setLoading(false)
    }

    const renderForm = () => {
        return (
            <form onSubmit={onSubmit} className="main-form activation" action="">
                <h2>Enter your activation code</h2>
                <div>
                    <input id="1" maxLength={1} onChange={handleChange} value={activationCode[0]} placeholder="X"
                           type="text"/>
                    <input id="2" maxLength={1} onChange={handleChange} value={activationCode[1]} placeholder="X"
                           type="text"/>
                    <input id="3" maxLength={1} onChange={handleChange} value={activationCode[2]} placeholder="X"
                           type="text"/>
                    <input id="4" maxLength={1} onChange={handleChange} value={activationCode[3]} placeholder="X"
                           type="text"/>
                </div>
                <Button classname="main-button" action={() => {
                }} name={"Next"} disabled={isDisabled}/>
            </form>
        );
    };

    return (
        <React.Fragment>
            {loading
                ? renderActivationBlock()
                : <Block>{renderForm()}</Block>
            }
        </React.Fragment>

    );
};
export default ActivationBlock;