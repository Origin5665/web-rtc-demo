import React from 'react';
import styles from './styles.module.scss';
import Logo from "../../../assets/175105.svg";
import Image from "next/image";

interface IBlock {
    children: React.ReactNode
}

export const Block: React.FC<IBlock> = ({children}) => {
    return(
        <div className={styles.block}>
            <div className={styles.block__body}>
                <Image height='60px' src={Logo} alt="Application logo"/>
                {children}
            </div>

        </div>
    )
}