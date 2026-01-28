import React, { useState } from 'react';
import Button from '../common/Button';
import Accessories from '../../assets/accessories.jpg';
import ResponsiveImage from '../common/Responsiveimage';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission logic
    console.log("Subscribed:", email);
    setEmail('');
  };

  return (
    <section className="bg-primary py-16 w-full max-w-[1440px] mx-auto mb-3 mt-3 flex flex-col md:flex-row items-center gap-6 overflow-hidden">
      <div className='ml-10 w-1/2'>
        <ResponsiveImage src={Accessories} alt="Accessory" className='w-full max-h-[420px] object-cover rounded-xl' />
      </div>
      <div className='mt-30 w-1/2 flex flex-col items-center text-center px-4'>
        <h3 className="text-3xl font-bold">Get more discount Off your order</h3>
        <p className="mb-8 font-semibold">Join our mailing list</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-neutralDark px-4 py-2 rounded w-full sm:w-auto text-neutralLight"
          />
          <Button type="submit" className="w-full sm:w-auto">Shop Now</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
