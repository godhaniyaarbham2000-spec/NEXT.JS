import "../globals.css";
import Navigation from "../../components/navigation";
import {Roboto} from "next/font/google";


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


  const roboto = Roboto ({
    subsets: ["latin"],
  }); // Font setup for layout shift prevention

export default function Rootyout ({children}){
  return(
    <div className={roboto.className}>

      <Navigation />
            <h1 className="m-6">Hello Layout</h1>
      {children}
    </div>
  )
}

