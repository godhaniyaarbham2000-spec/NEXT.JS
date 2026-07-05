export default async function LoadingTestPage() {
  // Yeh line jaan-boojh kar 3.5 seconds ka delay (wait) create kar rahi hai
  await new Promise((resolve) => setTimeout(resolve, 3500));

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#28a745' }}>Data Successfully Fetched! ✅</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Aapne notice kiya hoga ki is page ke aane se pehle aapko 3-4 seconds ke liye ek <strong>Animated Loading Screen</strong> dikhi thi! <br /><br />
        Wo loading screen seedha `app/loading.js` se aayi thi bina kisi Suspense import ke.
      </p>
    </div>
  );
}
