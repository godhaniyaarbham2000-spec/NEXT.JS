export default function Loading() {
  return (
    <>
      <h1 className="m-5 text-gray-500">Loading Server Comp...</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
        {[...Array(9)].map((_, i) => (
          <li key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-md"></li>
        ))}
      </ul>
    </>
  );
}
