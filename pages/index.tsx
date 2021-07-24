import React from 'react';
import Welcome from '../components/registration/welcome';
import Phone from '../components/registration/phone';
import Name from '../components/registration/name';
import Twitter from '../components/registration/twitter';
import Photo from '../components/registration/photo';
import Activation from '../components/registration/activation';

interface RegisterType {
    [key: number]: React.ComponentType
}

export default () => {
    const [step, setStep] = React.useState<number>(5)

    const registrationSteps: RegisterType = {
        0: Welcome,
        1: Name,
        2: Twitter,
        3: Photo,
        4: Phone,
        5: Activation
    }

    const StepComponent = registrationSteps[step];

    return (
        <div className="main">
            {<StepComponent/>}
        </div>

    )
}