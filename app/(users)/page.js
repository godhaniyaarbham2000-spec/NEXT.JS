import Link from 'next/link';

const Home = ()=>{
  return (
    <div className="m-6">
      <h1 className="comman text-2xl font-bold mb-4">welcome! next.js</h1>
      <Link href="/server-action-demo" className="text-blue-600 underline font-semibold text-lg p-2 border border-blue-600 rounded hover:bg-blue-50 inline-block">
        Go to Server Action Demo
      </Link>
    </div>
  );
}

export default Home;