import HomePage from "@/components/templates/HomePage";
import Customer from "@/models/Customer";
import connectDb from "@/utils/connectDB";
import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ customers }: any) {
  console.log("🚀 ~ Home ~ cutomers:", customers);
  return <HomePage customers={customers} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context);

  try {
    await connectDb();
    const cutomers = await Customer.find();

    return {
      props: {
        customers: JSON.parse(JSON.stringify(cutomers)),
      },
    };
  } catch (err) {
    console.log(err);

    return {
      notFound: true,
    };
  }
}
