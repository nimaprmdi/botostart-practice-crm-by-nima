import React from "react";
import ItemList from "./ItemList";
import FormInput from "./FormInput";

const Form = ({ form, setForm }: { form: any; setForm: React.SetStateAction<any> }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <FormInput
        type="text"
        name="name"
        label="Name"
        value={form.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <FormInput
        type="text"
        name="lastname"
        label="lastname"
        value={form.lastname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <FormInput
        type="text"
        name="email"
        label="email"
        value={form.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <FormInput
        type="text"
        name="phone"
        label="phone"
        value={form.phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <FormInput
        type="text"
        name="address"
        label="address"
        value={form.address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <FormInput
        type="text"
        name="postalCode"
        label="postalCode"
        value={form.postalCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <FormInput
        type="date"
        name="date"
        label="date"
        value={form.date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
