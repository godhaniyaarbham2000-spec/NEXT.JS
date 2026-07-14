export default async function AnalyticsSlot() {
  // 2. YEH KYU HAI: Data load delay simulation (2 sec)
  // Yeh dikhane ke liye ki yeh slot late load hone par bhi pure page ko freeze nahi karta.
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return (
    <div>
      <p>This panel loaded independently of the team panel!</p>
      <div className="mt-4 h-32 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
        Chart Placeholder
      </div>
    </div>
  );
}
