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

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.findOneAndDelete({ _id: id });
      res.status(200).json({ status: "success", message: "Item Deleted" });
    } catch (err) {
      console.log("err", err);
      res.status(500).json({ status: "failed", message: "Error Deleting Item" });
    }
  }
}
