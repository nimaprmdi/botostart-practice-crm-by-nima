import React from "react";
import Card from "../modules/Card";

const HomePage = ({ customers }: any) => {
  return <div>{customers && customers.map((customer: any) => <Card key={customer._id} {...customer} />)}</div>;
};

export default HomePage;
