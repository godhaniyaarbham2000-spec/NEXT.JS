export async function GET() {
  // Returns the exact server time so we can see when the API was actually hit
  const currentTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  return Response.json({
    data: "Hello from Mock API",
    timeFetched: currentTime
  });
}
