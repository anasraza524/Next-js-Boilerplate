import { ClerkProvider } from '@clerk/nextjs'
;
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'A scalable Next.js boilerplate with Clerk auth and shadcn/ui',
  openGraph: {
    title: 'Next.js Boilerplate',
    description: 'A scalable Next.js boilerplate with Clerk auth and shadcn/ui',
    url: 'https://your-site.com',
    siteName: 'Next.js Boilerplate',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}