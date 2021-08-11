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

type ContextType = {
    onNextStep: () => void
    step: number
}
export const context = React.createContext<ContextType>({} as ContextType);

export default () => {
    const [step, setStep] = React.useState<number>(0)

    const registrationSteps: RegisterType = {
        0: Welcome,
        1: Name,
        2: Twitter,
        3: Photo,
        4: Phone,
        5: Activation
    }

    const onNextStep = () => {
        setStep(prev => prev + 1)
    }

    const StepComponent = registrationSteps[step];

    return (
        <context.Provider value={{step, onNextStep}}>
            <div className="main">
                {<StepComponent />}
            </div>
        </context.Provider>

    )
}