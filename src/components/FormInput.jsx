import React from "react";

export default function FormInput({
  label,
  name,
  type,
  defaultValue,
  size,
  placeholder,
}) {
  return (
    <div className="form-control relative">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}
