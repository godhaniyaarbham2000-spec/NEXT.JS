"use client";


import { useEffect, useState } from "react";
import { Counter } from "./counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);

      setPostData(data);
      return data;
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="m-5">Client Comp</h1>
      <button
        className="bg-amber-400 text-black p-3 m-5  mt-2 rounded"
        onClick={() => alert("HI!!!")}
      >
        Click Me
      </button>
<Counter />
        <ul className="grid grid-cols-3 gap-5 m-5">
            {PostData.map((curElem , index)=>{
                return <li  key={index}>{curElem.body}</li>
            })}
        </ul>
      
    </>
  );
};

export default ClientComp;
