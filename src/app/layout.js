import { Inter } from 'next/font/google';
import './globals.css';

import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JunkCar Pro',
  description: 'Sell Cars',
  keywords: ['Buy Cars 2025', 'Sell Cars 2025'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
