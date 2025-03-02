import React from 'react';
import Photo from './Photo';
import Description from './Description';
import Price from './Price';
import Options from './Options';

interface CardProps {
    photoUrl: string;
    description: string;
    price: string;
}

const Card: React.FC<CardProps> = ({ photoUrl, description, price }) => {
    return (
        <div className="card">
            <Photo photoUrl={photoUrl} />
            <Description description={description} />
            <Price price={price} />
            <Options />
        </div>
    );
};

export default Card;