import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="cont">
          <i class="fa-regular fa-envelope"></i>
          <h2>contact us</h2>
        </div>
      <p>contact Me for more information</p>
      </div>
      <div className="information">
        <div className="input">
          <label htmlFor="email"> Email adress</label>
          <input type='email' id='email'></input>
        </div>
         <div className="input2">
         <label htmlFor="massege">your massege</label>
          <input type="text" id='massege' />
        </div> 

      </div>
    </section>
  )
}

export default Contact