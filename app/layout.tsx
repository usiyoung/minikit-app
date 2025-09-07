import "./theme.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  // const URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: "Aurora Pay", 
    description: "Aurora Pay leads the evolution of digital payments. We provide a simplified and frictionless solution for stablecoin-to-fiat conversion.",
    
    icons: {
      icon: '/aurora_pay.png',
      shortcut: '/aurora_pay.png',
      apple: '/aurora_pay.png',
      other: {
        rel: 'android-chrome-icon',
        url: '/aurora_pay.png',
      },
    },
    // other: {
    //   "fc:frame": JSON.stringify({
    //     version: "next",
    //     imageUrl: '/aurora_pay.png',
    //     button: {
    //       title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
    //       action: {
    //         type: "launch_frame",
    //         name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    //         url: URL,
    //         splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
    //         splashBackgroundColor:
    //           process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
    //       },
    //     },
    //   }),
    // },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
    <body className="bg-background">
      <Providers>{children}</Providers>
    </body>
  </html>
  );
}
