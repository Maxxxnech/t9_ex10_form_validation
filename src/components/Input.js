import React from "react";
import "./css/Input.css";
export default function Input({
  name,
  label,
  type,
  register,
  validation,
  error,
  disabled,
  onChange
}) {
  return (
    <>
      <p>
        <label htmlFor={name}>{label}</label>
      </p>
      <p>
        <input name={name} type={type} {...register(name, validation)} disabled={disabled} onChange={onChange}/>
      </p>
      <p className="input_error">{error?.message}</p>
    </>
  );
}
