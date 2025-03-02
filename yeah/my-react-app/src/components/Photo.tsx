import React from 'react';

interface PhotoProps {
    url: string;
}

const Photo: React.FC<PhotoProps> = ({ url }) => {
    return <img src={url} alt="Product" />;
};

export default Photo;