import React, { useState } from 'react';
import Button from '../common/Button';
import Accessories from '../../assets/accessories.jpg';
import ResponsiveImage from '../common/Responsiveimagae';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission logic
    console.log("Subscribed:", email);
    setEmail('');
  };

  return (
    <section className="bg-gray-400  py-16 w-full max-w-[1440px] mx-auto h-auto mb-3 flex flex-row gap-15">
      <div className='ml-10'>
        <ResponsiveImage src={Accessories} alt="Accessory" className='w-180 h-80' />
      </div>
      <div className='mt-30'>
        <h3 className="text-3xl font-bold">Get more discount Off your order</h3>
        <p className="mb-8 font-semibold">Join our mailing list</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-white w-full sm:w-1/3 "
          />
          <Button type="submit" className="w-full sm:w-auto">Shop Now</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
