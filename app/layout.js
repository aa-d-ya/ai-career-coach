import Header from "@/components/ui/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter ({subsets:["latin"]});

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

// app/layout.js
export default function RootLayout({ children }) {

  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`bg-black ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" flex flex-col min-h-screen">
            {/* header */}

            <Header/>
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-muted py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Your Smartest Career Move Yet.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
