import { useState } from 'react';
import { sendForm } from '@emailjs/browser';

export default function Form() {
  const [responseMessage, setResponseMessage] = useState('');

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm');
      setResponseMessage('ok');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        Email
        <input type="email" id="email" name="email" required />
      </label>
      <label>
        Message
        <textarea id="message" name="message" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
