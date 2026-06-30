"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div className="m-6">
      <h1 className="mb-4">Welcome! About Page</h1>
      <button 
        onClick={() => router.push("/")}
        className="mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Go to Home
      </button>
      <button 
        onClick={() => router.push("/service")}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Go to Service
      </button>
    </div>
  );
};

export default About;