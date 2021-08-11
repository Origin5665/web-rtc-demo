import React from 'react';
import styles from './styles.module.scss';

interface IUserPhoto {
    src: string
    description: string

}

export const UserPhoto: React.FC<IUserPhoto> = ({src, description}) => {
    return(
        <img className={styles.photo} src={src} alt={description}/>
    );
};