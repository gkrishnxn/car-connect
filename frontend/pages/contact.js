import React from 'react';
import Form from './Form'; // Assuming you have a reusable Form component

const Contact = () => {
  return (
    <div>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          Have any questions or need to get in touch? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <Form /* Configure the form with fields like name, email, message, etc. */ />
      </section>
    </div>
  );
};

export default Contact;
