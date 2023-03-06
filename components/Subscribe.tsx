import { FormEvent, useState } from "react";

export const Subscribe = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  const subscribeUser = async (event: any) => {
    event.preventDefault();
    setError(false);
    setPending(true);

    const formData = new FormData();
    formData.append('email', event.target.email.value);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwRBkztK31FOMI4ylfjU4ebC9EV_k0g0toUGVwi88nrryxlFAL8L3FwLXMo6sQUNKlwOQ/exec',
        {
          body: formData,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          mode: 'no-cors'
        }
      );
      setSuccess(true);
    } catch (e) {
      setError(true);
    } finally {
      setPending(false);
    }
  };

  return (
    <section className='subscribe-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex justify-content-center align-content-center'>
            <p>Subscribe to our Newsletter</p>
          </div>
          <form className='col-12 col-md-6 inputContainer' onSubmit={subscribeUser}>
            <input id='email' type='email' autoComplete='email' placeholder='john@swaysocial.org' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'/>
            <button type='submit' className={pending ? 'disabled' : ''}>Subscribe</button>
          </form>
          <div className='col-12 col-md-6 offset-md-6 d-flex d-md-block justify-content-center mt-1'>
            {success && (
              <span>You are added to our Newsletter!</span>
            )}
            {error && (
              <span>There was an error, please try again.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}