import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
  const product = {
    photoUrl: 'https://example.com/photo.jpg',
    description: 'This is a great product.',
    price: '$99.99',
  };

  return (
    <div>
      <h1>Photo Store</h1>
      <Card 
        photoUrl={product.photoUrl} 
        description={product.description} 
        price={product.price} 
      />
    </div>
  );
};

export default App;