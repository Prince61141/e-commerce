import React from 'react';

const Options: React.FC = () => {
    const handleBuyNow = () => {
        // Logic for buying now
        alert('Buy Now option selected');
    };

    const handlePayOnEMI = () => {
        // Logic for paying on EMI
        alert('Pay on EMI option selected');
    };

    return (
        <div>
            <button onClick={handleBuyNow}>Buy Now</button>
            <button onClick={handlePayOnEMI}>Pay on EMI</button>
        </div>
    );
};

export default Options;