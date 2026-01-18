import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import 'antd/dist/reset.css';
import './globals.css';
import AntdRegistry from './providers/AntdRegistry';
import { AppThemeProvider } from './providers/AppThemeProvider';
import Header from './components/commons/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learn Book',
  description: 'Ghi chép và ghi nhớ kiến thức là việc quan trọng nhất khi học kiến thức mới!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistMono.variable} ${inter.className} antialiased`}>
        <Header />
        <AntdRegistry>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AntdRegistry>
      </body>
    </html>

  );
}
