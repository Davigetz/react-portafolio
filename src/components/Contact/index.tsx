import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from "react";
import "./style.css";
import { error, state, validation } from "./types";

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
      setState({ ...state, [key!]: value });
    };

  const handleSubmit = async (e?: React.FormEvent) => {
    e!.preventDefault();

    const validations: validation = {
      name: {
        required: {
          value: true,
          message: "need a name to comunicate properly",
        },
      },
      email: {
        required: {
          value: true,
          message: "I need a email to contact with",
        },
        pattern: {
          value: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
          message: "You have entered an invalid email address!",
        },
      },
    };

    if (validations) {
      let valid = true;
      const newErrors: state = { name: "", email: "", message: "" };
      for (const key in validations) {
        const value = state[key as keyof state];
        const validation = validations[key as keyof validation];
        console.log(validation);
        if (validation.required?.value && !value) {
          console.log("entre");
          valid = false;
          newErrors[key as keyof state] = validation.required.message;
          console.log(newErrors);
        }

        // const pattern = validation?.pattern;

        if (!valid) {
          setErrors(newErrors);
          return;
        }
        setErrors({});
      }
    }
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
                // required
                onChange={handleChange("name")}
              />
              <label className="form__label">Name</label>
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                // required
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
