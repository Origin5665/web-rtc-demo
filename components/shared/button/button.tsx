import React from 'react';

interface IButton {
    action: (e: React.MouseEvent<HTMLButtonElement> | TouchEvent) => void
    classname?: string
    name: string
    disabled?: boolean
}

export const Button: React.FC<IButton> = ({action, name, classname, disabled}) => {

    return (
        <button
            className={classname}
            disabled={disabled}
            onClick={action}>
            {name}
        </button>
    )
}

//todo CSS свойства для заблокированной кнопки