import React from 'react';

interface PriceProps {
    value: number;
}

const Price: React.FC<PriceProps> = ({ value }) => {
    return (
        <div>
            <span>${value.toFixed(2)}</span>
        </div>
    );
};

export default Price;