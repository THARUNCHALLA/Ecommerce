import { useState } from 'react';

const Recommended = () => {
  const [active, setActive] = useState('All Products');

  return (
    <div className='mx-6'>
      <p className='font-mono text-xl font-semibold mb-2'>Recommended</p>
      {["All Products","Nike","Adidas","Puma","Vans"].map(brand => (
        <button
          key={brand}
          className={`border px-2 py-1 mr-3 ${
            active === brand ? 'bg-blue-600 text-white' : ''
          }`}
          onClick={() => setActive(brand)}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};


export default Recommended