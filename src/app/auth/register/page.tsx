"use client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={onSubmit}>
        <input type="text" {...(register("username"), { required: true })} />
        <input type="email" {...(register("email"), { required: true })} />
        <input
          type="password"
          {...(register("password"), { required: true })}
        />
        <input
          type="confirmPassword"
          {...(register("confirmPassword"), { required: true })}
        />

        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
