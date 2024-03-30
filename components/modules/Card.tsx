import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Card: React.FC = ({ ...customer }: any): JSX.Element => {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.status === "success") router.reload();
  };

  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {customer.lastname}
        </p>
        <p>{customer.email}</p>
      </div>

      <div className="card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Card;
