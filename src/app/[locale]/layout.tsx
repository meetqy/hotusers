import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import { MyNavbar } from "~/components/navbar";
import { Providers } from "../providers";
import { cn } from "~/utils/cn";

export const metadata = {
  title: "Discover Hot Users",
  description: "Explore Influential Bloggers from Around the Web.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(GeistSans.variable)}>
      <body>
        <TRPCReactProvider>
          <Providers>
            <MyNavbar />

            <main className="h-full min-h-[calc(100vh-4rem)]">
              <div className="container w-full max-w-screen-xl px-0 xl:px-8">
                {children}
              </div>
            </main>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
