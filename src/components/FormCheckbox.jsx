import React from "react";

export default function FormCheckbox({ label, name, defaultValue, size }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text">{label}</span>
        <input
          className={`checkbox checkbox-primary ${size}`}
          type="checkbox"
          name={name}
          id={name}
          defaultChecked={defaultValue}
        />
      </label>
    </div>
  );
}
