import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

import './App.css';

/**
 * ・useStateと違って、入力値を帰るたびにレンダリングが走らない。
 * ・watch('firstName')を使えば、firstNameが変わった場合のみレンダリングが走る。
 */
function App() {
  console.log('App');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    const formValue = {};

    _.set(formValue, 'firstName', 'John');
    _.set(formValue, 'lastName', 'Doe');

    reset(formValue);
  }, [reset]);

  const onSubmit = (data) => {
    console.log('submit', data);
  };

  console.log('watch', watch());

  const requredRegister = register({ required: true });

  const firstNameDef = {
    name: 'firstName',
    ref: requredRegister,
  };

  const lastNameDef = {
    name: 'lastName',
    ref: requredRegister,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...firstNameDef} placeholder="First Name" />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input {...lastNameDef} placeholder="Last Name" />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
