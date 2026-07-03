export default function ErrorTestPage() {
  
  throw new Error(" intentional test error !");

  return (
    <div>
      <h1>Yeh page kabhi nahi dikhega</h1>
    </div>
  );
}
