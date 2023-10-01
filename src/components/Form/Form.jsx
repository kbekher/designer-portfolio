import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss';

const SERVICE_ID = 'service_0lkajj1';
const TEMPLATE_ID = 'template_fo83dwr';
const PUBLIC_KEY = 'J1VAP8MMyBRlLDJNs';

export const Form = () => {
  const form = useRef(null);
  // const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  // const [isEmailError, setIsEmailError] = useState(false);

  const handleInputChange = (e) => setEmail(e.target.value);

  const isEmailValid = () => {
    // Return true if the email is valid, otherwise return false
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (email && isEmailValid()) {
        handleSubmit(e);
      } else {
        // setIsEmailError(true);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !isEmailValid()) {
      return;
    }

    if (form.current) {
      setIsSubmitting(true);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          // setIsSent(true);
          setIsSubmitting(false);
          setEmail('');
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <form
      className="Form"
      ref={form}   
      onSubmit={handleSubmit} 
    >
      <input
        type="text"
        name="email"
        className="Form__input"
        value={email}
        onChange={handleInputChange}
        onKeyDown={(e) => handleEnterKey(e)}
        placeholder="Type youre email..."

      />
      <button 
        type="submit"
        className="Form__button"
        disabled={isSubmitting}
      >
        Subscribe
      </button>
{/* 
      {isSent ? (
              <p className="Contacts__form-message">
                {formErrorMessage ? formErrorMessage : 'Thanks for your message!'}
              </p>
            ) : <p className="Contacts__form-message"> {' '} </p>} */}
    </form>
  );
};