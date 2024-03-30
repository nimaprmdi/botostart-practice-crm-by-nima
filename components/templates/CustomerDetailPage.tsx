import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomerDetailPage = ({ data }: any) => {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${data._id}`, { method: "DELETE" });
    const newdata = await res.json();
    if (newdata.status === "success") router.push("/");
  };

  return (
    <div className="customer-detail">
      <h4>Customer Details</h4>

      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name: </span>
          <p>{data.name}</p>
        </div>

        <div className="customer-detail__item">
          <span>lastname: </span>
          <p>{data.lastname}</p>
        </div>

        <div className="customer-detail__item">
          <span>email: </span>
          <p>{data.email}</p>
        </div>

        <div className="customer-detail__item">
          <span>Phone: </span>
          <p>{data.phone}</p>
        </div>

        <div className="customer-detail__item">
          <span>Name: </span>
          <p>{data.name}</p>
        </div>

        <div className="customer-detail__item">
          <span>Address: </span>
          <p>{data.address}</p>
        </div>

        <div className="customer-detail__item">
          <span>Date: </span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>

        <div className="customer-detail__item">
          <span>postalCode: </span>
          <p>{data.postalCode}</p>
        </div>

        <div className="customer-detail__products">
          <p>Name</p>
          <p>Price</p>
          <p>Qty</p>

          {data.products.map(
            (product: any, index: number): JSX.Element => (
              <React.Fragment key={index}>
                <span>{product.name}</span>
                <span>{product.price}</span>
                <span>{product.qty}</span>
              </React.Fragment>
            )
          )}
        </div>

        <div className="customer-detail__buttons">
          <p>Edit Or Delete</p>
          <button onClick={deleteHandler}>Delete</button>
          <Link href={`/edit/${data._id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailPage;
