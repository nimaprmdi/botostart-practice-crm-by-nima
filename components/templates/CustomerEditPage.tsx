import React, { useEffect, useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import moment from "moment";

const CustomerEditPage = ({ data, id }: any) => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: data.name || "",
    lastname: data.lastname || "",
    email: data.email || "",
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || [""],
    date: data.date || "",
  });

  useEffect(() => {
    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";

    setForm({
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone || "",
      address: data.address || "",
      postalCode: data.postalCode || "",
      products: data.products || [],
      date: date,
    });

    //
  }, [data]);

  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") return router.push("/");
  };

  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>

      <Form form={form} setForm={setForm} />

      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Save
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CustomerEditPage;
