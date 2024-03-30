import React, { useState } from "react";
import Form from "@/components/modules/Form";
import { useRouter } from "next/router";

const AddCustomer: React.FC = (): JSX.Element => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    postalCode: "",
    date: Date.now(),
    products: [],
  });

  const router = useRouter();

  const cancelHandler = () => {};

  const saveHandler = async () => {
    console.log("form", form);

    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: {
        "Coantent-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.push("/");
  };

  return (
    <div>
      <h4>Add new customer</h4>

      <Form form={form} setForm={setForm} />

      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
