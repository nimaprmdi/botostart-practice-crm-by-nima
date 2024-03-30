import { NextApiRequest, NextApiResponse } from "next";
import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ status: "failed", message: "Error in connecting to database" });
    return;
  }

  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: "success", data: customer });
    } catch (err: any) {
      console.log(err.message);

      res.status(500).json({
        status: "failed",
        message: "Error in retrieving data from database",
      });
    }
  }
}
