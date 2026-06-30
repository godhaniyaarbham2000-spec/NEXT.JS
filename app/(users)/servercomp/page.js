const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1 className="m-5">Server Comp</h1>

      <ul className="grid grid-cols-3 gap-5 m-5">
        {data.map((curElem, index) => {
          return <li key={index}>{curElem.body}</li>;
        })}
      </ul>
    </>
  );
};

export default ServerComp;
