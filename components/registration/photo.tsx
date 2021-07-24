import React from 'react';
import {Block} from "../shared/block/block";
import {Button} from "../shared/button/button";
import {UserPhoto} from "../shared/avatar/avatar";

// interface IPhoto {
//     userName: string
// }

const PhotoBlock: React.FC<IPhoto> = ({userName}) => {
    const [imageUrl, setImageUrl] = React.useState<string>('');
    const inputFile = React.useRef<HTMLInputElement>(null);

    const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e)
        if(e.target.files){
            const file = e.target.files[0];
            const userImageUrl = URL.createObjectURL(file);
            setImageUrl(userImageUrl)
        }
    };


    return (
        <Block>
            <h2>Okay, {userName ? userName : 'Friend'}!</h2>
            {imageUrl && <UserPhoto src={imageUrl} description={"User photo"}/>}
            <form className="main-form" action="">
                <input onChange={handleUploadFile} ref={inputFile} id="user-photo"  type="file" hidden/>
                <label htmlFor={'user-photo'}>Choose your photo</label>
                <Button classname="main-button" action={() => {
                }} name={"Next"}/>
            </form>
        </Block>
    );
};
export default PhotoBlock;