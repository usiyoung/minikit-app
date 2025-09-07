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
  const URL = process.env.NEXT_PUBLIC_URL;
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
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: '/aurora_pay.png',
        button: {
          title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
            splashBackgroundColor:
              process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
   <head>
   <link rel="shortcut icon" type="image/png" href="/aurora_pay.png" />
    <link rel="apple-touch-icon" sizes="192x192" href="/aurora_pay.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="/aurora_pay.png" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#fff" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="description" content="Swap crypto on Ethereum, Base, Arbitrum, Polygon, Unichain and more. The DeFi platform trusted by millions." data-rh="true" />
    <meta property="og:title" content="Aurora Pay" data-rh="true" />
    <meta property="og:description" content="Swap crypto on Ethereum, Base, Arbitrum, Polygon, Unichain and more. The DeFi platform trusted by millions." data-rh="true"/>
    <meta property="og:image" content="/aurora_pay.png" data-rh="true"/>
    <meta property="og:image:width" content="1200" data-rh="true"/>  
    <meta property="og:image:height" content="630" data-rh="true"/>
    <meta property="og:image:alt" content="Aurora Pay" data-rh="true"/>
    <meta property="og:type" content="website" data-rh="true"/>
    <meta property="og:url" content="https://aurora-mini-app.netlify.app/.well-known/farcaster.json" data-rh="true"/>
    <meta property="twitter:card" content="summary_large_image" data-rh="true"/>
    <meta property="twitter:title" content="Aurora Pay" data-rh="true"/>
    <meta property="twitter:image" content="/aurora_pay.png" data-rh="true"/>
    <meta property="twitter:image:alt" content="Aurora Pay" data-rh="true"/>

   </head>
    <body className="bg-background">
      <Providers>{children}</Providers>
    </body>
  </html>
  );
}
