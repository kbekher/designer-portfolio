import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss';

const SERVICE_ID = 'service_0lkajj1';
const TEMPLATE_ID = 'template_fo83dwr';
const PUBLIC_KEY = 'J1VAP8MMyBRlLDJNs';

export const Form = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setIsSent(false);
    setEmail(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (email) {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    if (form.current) {
      setIsSubmitting(true);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setIsSent(true);
          setEmail('');
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="Form">
      <form
        className="Form__form"
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
      </form>

      <div className="Form__message-container">
        {isSent && (
          <p className="Form__message">
            Thank you for subscribing to the newsletter!
          </p>
        )}
      </div>
    </div>
  );
};