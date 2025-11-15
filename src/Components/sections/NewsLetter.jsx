import React, { useState } from 'react';
import Button from '../common/Button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission logic
    console.log("Subscribed:", email);
    setEmail('');
  };

  return (
    <section className="bg-teal-700 text-pink py-16 w-1440px h-490px mb-10">

      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Get more discount Off your order</h3>
        <p className="mb-8">Join our mailing list</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 rounded text-white-700 w-full sm:w-1/3"
          />
          <Button type="submit" className="w-full sm:w-auto">Shop Now</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
