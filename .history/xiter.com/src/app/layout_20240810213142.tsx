import { Providers } from '@/app/CharaUiConfig/providers'; // Ensure the path is correct
import { ReactNode } from 'react';
import Navbar from './components/NavBar'; // Adjust the path as necessary

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add any custom head elements here */}
      </head>
      <body>
        <Navbar/>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  );
}
