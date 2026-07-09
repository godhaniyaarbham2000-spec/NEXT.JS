import "./globals.css";

export const metadata = {
  title: {
    default: "Arbham Godhaniya | Learn Web Development",
    template: "%s | Arbham Mer",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Thapa Technical.",
  keywords: ["React", "Next.js", "Web Development", "Thapa Technical"],
  icons: {
    icon: "/fav.jpg",
  },
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "WEB Technical",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "WEB Technical",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WEB Technical Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEB Technical",
    description: "Learn Web Dev from scratch with Thapa Technical!",
    creator: "@arbhamgoghaniya",
    images: ["/og-image.png"],
  },
};

import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
