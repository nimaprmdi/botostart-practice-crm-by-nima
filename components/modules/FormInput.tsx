import React from "react";

const FormInput = ({
  name,
  label,
  type,
  value,
  onChange,
}: {
  name: any;
  label: any;
  type: any;
  value: any;
  onChange: any;
}) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
