import Customer from "@/models/Customer";
import connectDb from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDb();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed", message: "Error Connecting To DB" });
  }

  if (req.method === "PATCH") {
    const id = req.query.customerId;

    const data: any = req.body.data;
    console.log("ididididididididididid", data);

    try {
      const customer: any = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastname = data.lastname;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();

      res.status(200).json({ status: "success", message: "Data Has been changed", data: customer });
    } catch (error) {
      res.status(500).json({ status: "failed", message: error.message });
    }
  }
}
