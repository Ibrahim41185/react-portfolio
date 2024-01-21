import React from 'react'
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("mzbndpdw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <section>
      <div className="contact">
        <div className="cont">
          <i class="fa-regular fa-envelope"></i>
          <h2>contact us</h2>
        </div>
        <p>contact Me for more information</p>
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit} className="information">
          <div className="input">
            <label htmlFor="email"> Email adress</label>
            <input type='email' name='email' id='email'></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input2">
            <label htmlFor="massege">your massege</label>
            <input type="text" name='message' id='massege' />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact