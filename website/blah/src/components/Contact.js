import React from 'react';
import Pillblock from "./Pillblock";

const Contact =()=>{
return( 
    <div className="contact">
 <form
            action="https://formspree.io/mjvyrkjr"
            method="POST"
          >
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  size="15"
                  maxLength="30"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  size="15"
                  maxLength="30"
                ></input>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  size="15"
                  maxLength="30"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  name="message"
                  cols="20"
                  rows="10"
                  placeholder="message"
                  required
                ></textarea>
              </li>
              <button type="submit">send<i className="far fa-handshake"></i></button>
            </ul>
          </form>
          <div className="pill-contact">
          <Pillblock class="pill-form"/>
          <Pillblock class="pill-form"/>
          </div>
    </div>
    )
}
 
export default Contact;