import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...(register("username"), { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <input type="email" {...(register("email"), { required: true })} />
        <input
          type="password"
          {...(register("password"), { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <input
          type="confirmPassword"
          {...(register("confirmPassword"), { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />

        <button>Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
