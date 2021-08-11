import React from 'react';
import {Block} from "../shared/block/block";
import {Button} from "../shared/button/button";
import {UserPhoto} from "../shared/avatar/avatar";
import {context} from "../../pages";

interface IPhoto {
}

const PhotoBlock: React.FC<IPhoto> = () => {
    const {onNextStep} = React.useContext(context)
    const [imageUrl, setImageUrl] = React.useState<string>('');
    const inputFile = React.useRef<HTMLInputElement>(null);

    const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            const file = e.target.files[0];
            const userImageUrl = URL.createObjectURL(file);
            setImageUrl(userImageUrl)
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <Block>
            <h2>Okay, Friend!</h2>
            {imageUrl && <UserPhoto src={imageUrl} description={"User photo"}/>}
            <form onSubmit={handleSubmit} className="main-form">
                <input onChange={handleUploadFile} ref={inputFile} id="user-photo" type="file" hidden/>
                <label htmlFor={'user-photo'}>Choose your photo</label>
                <Button classname="main-button" action={onNextStep} name={"Next"}/>
            </form>
        </Block>
    );
};
export default PhotoBlock;