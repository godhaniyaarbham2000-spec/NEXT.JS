import { NextResponse } from 'next/server';

// ==========================================
// TOPIC 7: Rate Limiting (Memory based)
// Code kya kehta hai: Hum ek 'Map' bana rahe hain jo yaad rakhega ki kis IP ne kitni baar request ki hai.
// ==========================================
const rateLimitMap = new Map();

// ==========================================
// TOPIC 1: Middleware (Proxy) & Edge Runtime
// Code kya kehta hai: Yeh 'proxy' function har request par sabse pehle chalega.
// Edge Runtime ka matlab hai ki yeh code normal server se pehle chalega (fast execution).
// ==========================================
export function proxy(request) {

  // TOPIC 7 (Rate Limiting) Logic start:
  // Code kya kehta hai: User ka IP check karo, uski request count badhao. Agar 50 se zyada hai to block kar do.
  const ip = request.ip ?? '127.0.0.1';
  const limit = 50; // Max 50 requests allowed taaki test karte waqt dikkat na aaye
  const windowMs = 60 * 1000; // 1 minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 0, lastReset: Date.now() });
  }

  const ipData = rateLimitMap.get(ip);
  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    // Agar limit se zyada request aayi toh error (Status 429) wapas bhej do
    return new NextResponse('Rate limit exceeded. Too many requests. (Topic 7 Output)', { status: 429 });
  }
  ipData.count += 1;
  // TOPIC 7 Logic end

  // ==========================================
  // TOPIC 3: Request Interception (Rewrites & Redirects)
  // Code kya kehta hai: URL ko intercept karke check karna aur sahi jagah bhejna.
  // ==========================================
  const url = request.nextUrl;

  // 1. REDIRECT Example (Aapka Dashboard Protection Logic)
  // Pehle aapne yeh logic 'app/dashboard/page.js' me likha tha. Ab hum ise Middleware (Proxy) me kar rahe hain.
  // Agar user '/dashboard' par jane ki koshish kare, toh hum check karenge ki wo login hai ya nahi.
  if (url.pathname.startsWith('/dashboard')) {
    // Hum cookie check kar rahe hain ki session (login token) hai ya nahi
    // Note: NextAuth generally 'authjs.session-token' ya 'next-auth.session-token' banata hai
    const hasToken = request.cookies.get('authjs.session-token') || request.cookies.get('next-auth.session-token');

    if (!hasToken) {
      // Agar token NAHI hai (user login nahi hai), toh use dhakka maar kar '/login' par bhej do!
      // Browser ka URL turant '/login' ho jayega.
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  // 2. REWRITE Example
  // Rewrite ka matlab: URL wahi rahega jo user ne type kiya, par piche se page koi aur dikhega.
  // Maan lijiye aapka purana page '/about-us' tha, par ab aapne uska naam badal kar '/company' rakh diya hai.
  if (url.pathname === '/about-us') {
    url.pathname = '/company';
    return NextResponse.rewrite(url);
  }

  // Agar upar me se kuch nahi hua (normal route hai), toh user ko jahan jana tha wahan jane do
  return NextResponse.next();
}

// ==========================================
// TOPIC 2: Route Matchers
// Code kya kehta hai: Yeh array Next.js ko batata hai ki upar wala middleware function 'kin-kin' pages/paths ke liye chalana hai.
// ==========================================
export const config = {
  // 'matcher' ka matlab hai: Har route par middleware chalao, LEKIN (api, static files, images) ko chhod kar.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
