export default function AnalyticsDefault() {
  // 3. YEH KYU HAI: Fallback UI.
  // Jab koi user /dashboard/settings par jaye, toh settings ke andar @analytics folder nahi hai.
  // Toh Next.js yeh default.js file dikhayega taaki page error 404 na de (crash na ho).
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded text-center text-gray-500">
      Fallback: No analytics match for this route
    </div>
  );
}
