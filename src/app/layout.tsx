import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Jirath "Bart" Lojanarungsiri',
  description: "Bart's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Inline critical CSS for instant loading screen */}
        <style dangerouslySetInnerHTML={{__html: `
          @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap");
          
          /* Prevent layout shift */
          html:has(#instant-loading:not(.loading-hidden)) {
            overflow: hidden;
          }
          
          body:has(#instant-loading:not(.loading-hidden)) {
            overflow: hidden;
          }
          
          #instant-loading {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            background-color: #424874;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          
          #instant-loading-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 600px;
            padding: 0 20px;
            box-sizing: border-box;
            text-align: center;
          }
          
          #instant-loading h2 {
            color: #F4EEFF;
            font-size: 2.5rem;
            font-weight: 800;
            margin: 0 0 2rem 0;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            letter-spacing: 0.5px;
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          .instant-loader-bar {
            width: 100%;
            max-width: 400px;
            height: 12px;
            background-color: #A6B1E1;
            border-radius: 50px;
            overflow: hidden;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
            position: relative;
          }
          
          .instant-loader-fill {
            height: 100%;
            width: 0%;
            background-color: #DCD6F7;
            border-radius: 50px;
            animation: loading 2s ease-in-out infinite;
            box-shadow: 0px 0px 10px rgba(220, 214, 247, 0.5);
          }
          
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 0%; }
          }
          
          .instant-loader-dots {
            display: flex;
            gap: 8px;
            margin-top: 2rem;
            justify-content: center;
          }
          
          .instant-loader-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #F4EEFF;
            animation: bounce 0.8s ease-in-out infinite;
          }
          
          .instant-loader-dot:nth-child(2) {
            animation-delay: 0.15s;
          }
          
          .instant-loader-dot:nth-child(3) {
            animation-delay: 0.3s;
          }
          
          @keyframes bounce {
            0%, 100% { 
              transform: translateY(0);
              opacity: 0.5;
            }
            50% { 
              transform: translateY(-10px);
              opacity: 1;
            }
          }
          
          .loading-hidden {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease-out;
          }

          @media (max-width: 760px) {
            #instant-loading h2 {
              font-size: 2rem;
            }
            
            #instant-loading-content {
              padding: 0 10%;
            }
          }
        `}} />

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-M1LJ2BM40K`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M1LJ2BM40K', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Instant loading screen - shows immediately */}
        <div id="instant-loading">
          <div id="instant-loading-content">
            <h2>Loading Portfolio</h2>
            <div className="instant-loader-bar">
              <div className="instant-loader-fill"></div>
            </div>
            <div className="instant-loader-dots">
              <div className="instant-loader-dot"></div>
              <div className="instant-loader-dot"></div>
              <div className="instant-loader-dot"></div>
            </div>
          </div>
        </div>
        
        {children}
        <Analytics/>
      </body>
    </html>
  );
}