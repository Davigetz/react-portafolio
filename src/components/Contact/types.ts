export type validation = {
  name: validationType;
  email: validationType;
  message: validationType;
};

export type validationType = {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export type state = {
  name: string;
  email: string;
  message: string;
};

export type error = {
  name?: string;
  email?: string;
  message?: string;
};
