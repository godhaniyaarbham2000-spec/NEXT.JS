// Simulated slow component
export default async function ProductReviews() {
  // Simulate a 3-second network delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div style={{ padding: '15px', border: '1px solid #2ecc71', borderRadius: '8px', borderLeft: '5px solid #2ecc71' }}>
        <strong>⭐⭐⭐⭐⭐ - Rohan</strong>
        <p>Bhai kya phone hai, maza aa gaya! (Loaded after 3s)</p>
      </div>
      <div style={{ padding: '15px', border: '1px solid #2ecc71', borderRadius: '8px', borderLeft: '5px solid #2ecc71' }}>
        <strong>⭐⭐⭐⭐ - Aman</strong>
        <p>Camera is amazing. Battery life thodi better ho sakti thi.</p>
      </div>
    </div>
  );
}
