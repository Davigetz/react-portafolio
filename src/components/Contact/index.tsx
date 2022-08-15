import React, {
  DetailedHTMLProps,
  FormHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import "./style.css";
import { error, state, validation, validationType } from "./types";

import emailjs from "@emailjs/browser";

interface contactProps {
  language: string;
}

export const Contact: React.FC<contactProps> = ({ language }) => {
  const [textos, setTextos] = useState({
    name: "",
    email: "",
    message: "",
    send: "",
  });
  const [state, setState] = useState<state>({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (language === "es") {
      setTextos({
        name: "Nombre",
        email: "Mail",
        message: "Mensaje",
        send: "Enviar",
      });
    } else {
      setTextos({
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      });
    }
  }, [language]);
  const [errorMailjs, setErrorMailjs] = useState(null);
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<error>({});
  const [loadingSuccess, setLoadingSucces] = useState("");
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
      }
    }

    setLoadingSucces("animate");
    setErrors({});
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID!
      )
      .then((r) => {
        setLoadingSucces("success");
        setTimeout(() => {
          setLoadingSucces("");
          setState({ ...state, name: "", email: "", message: "" });
        }, 1000);

        console.log(r);
      })
      .catch((error) => {
        setLoadingSucces("error");
        console.log(error.text);
        setTimeout(() => {
          setErrorMailjs(error.text);
        }, 1000);
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div>
          <form className="forma" onSubmit={handleSubmit} ref={form}>
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
              <label className="form__label">{textos.name}</label>
              {errors.name && <p className="errors">{errors.name}</p>}
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                value={state.email}
                onChange={handleChange("email")}
              />
              <label className="form__label">{textos.email}</label>
              {errors.email && <p className="errors">{errors.email}</p>}
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
              <label className="form__label__area">{textos.message}</label>
              {errors.message && <p className="errors">{errors.message}</p>}
            </div>
            <button
              className={`button ${loadingSuccess}`}
              type="submit"
              value="send"
            >
              {textos.send}
            </button>
            {errorMailjs && <p className="errors">{errorMailjs}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
