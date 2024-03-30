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

  if (req.method === "POST") {
    const { data } = JSON.parse(req.body);

    // Validation
    if (!data.name || !data.lastname || !data.email)
      return res.status(400).json({ status: "failed", message: "Invalid Data" });

    // Insert item to DB
    try {
      const customer = await Customer.create(data);
      res.status(201).json({ status: "success", message: "Data created", data: customer });
    } catch (err) {
      res.status(500).json({ status: "failed", message: "Failed adding item to DB" });
    }
  }
}
