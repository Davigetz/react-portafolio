import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from "react";
import "./style.css";
import { error, state, validation, validationType } from "./types";

const sgMail = require("@sendgrid/mail");

export const Contact = () => {
  const [state, setState] = useState<state>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<error>({});
  const handleChange =
    (key?: string, sanitizeFn?: (key: string) => any) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
      console.info("ingrese handleChange");
      console.log(value);
      setState({ ...state, [key!]: value });
    };

  const handleSubmit = async (e?: React.FormEvent) => {
    e!.preventDefault();

    const validations: validation = {
      name: {
        required: {
          value: true,
          message: "I need a name to comunicate properly",
        },
      },
      email: {
        required: {
          value: true,
          message: "I need a email to contact with",
        },
        pattern: {
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "You have entered an invalid email address!",
        },
      },
      message: {
        required: {
          value: true,
          message: " I need a message to read, Please Provide some Message",
        },
      },
    };

    if (validations) {
      let valid = true;
      const newErrors: state = { name: "", email: "", message: "" };
      for (const key in validations) {
        console.log(state);
        const value = state[key as keyof state];
        console.log(value);
        const validation = validations[key as keyof validation];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key as keyof state] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key as keyof state] = pattern.message;
        }

        if (!valid) {
          setErrors(newErrors);
          return;
        }
        setErrors({});
      }
    }
  };

  const sendMail = async () => {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(
      "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"
    );
    const msg = {
      to: "elhirech.95@gmail.com",
      from: "test@example.com",
      subject: "Sending with Twilio SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
  };
  return (
    <section id="contact">
      <div className="contact-container">
        <div>
          <form className="forma" onSubmit={handleSubmit}>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                name="name"
                id="name"
                value={state.name}
                onChange={handleChange("name")}
              />
              <label className="form__label">Name</label>
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                value={state.email}
                onChange={handleChange("email")}
              />
              <label className="form__label">Email</label>
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form__group area">
              <textarea
                className="form__field__area"
                placeholder="Message"
                name="message"
                id="message"
                value={state.message}
                // @ts-ignore
                onChange={handleChange("message")}
                // required
              />
              <label className="form__label__area">Message</label>
              {errors.message && <p>{errors.message}</p>}
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
