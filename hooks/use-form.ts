import React, { useState } from 'react';

type IProps = {
  [key: string]: string;
};

export const useForm = (initialValues: IProps) => {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  };
};
