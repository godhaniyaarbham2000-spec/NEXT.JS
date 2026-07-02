"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  const pages = searchParams.getAll("page");
  const category = searchParams.getAll("category");

  console.log("page :",pages);
  
  console.log("category:",category);


  return (
    <>
      <h1>Client: <u>{category}</u> pages: <u>{pages.join(",")}</u> </h1>
    </>
  );
};

export default ProductList;
