export type validation = {
  name: {
    required?: {
      value: boolean;
      message: string;
    };
  };
  email: {
    required?: {
      value: boolean;
      message: string;
    };
    pattern?: {
      value: string;
      message: string;
    };
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
