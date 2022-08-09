import React from "react";
import "./style.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div>
          <form className="forma">
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label className="form__label">Name</label>
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              <label className="form__label">Email</label>
            </div>
            <div className="form__group area">
              <textarea
                className="form__field__area"
                placeholder="Message"
                name="message"
                id="message"
                required
              />
              <label className="form__label__area">Message</label>
            </div>
            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
