import CustomerEditPage from "@/components/templates/CustomerEditPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CustomerEdit = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((result: any) => {
          setData(result.data);
        });
    }
  }, [isReady]);

  if (data) return <CustomerEditPage data={data} id={customerId} />;
};

export default CustomerEdit;
