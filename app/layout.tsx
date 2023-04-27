import './globals.css';
import { Ruda } from 'next/font/google';
import LayoutNavbar from '../components/layout/LayoutNavbar';

const fontRuda = Ruda({ subsets: ['latin'] });
export const metadata = {
  title: 'LeftField Widget',
  description: 'Embeddable AI for your input fields',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta content="ThunderPlains Developer Conference" name="description" />
        <meta name="author" content="Vance Lucas" />
        <title>ThunderPlains 2023</title>
      </head>
      <body style={fontRuda.style}>
        <header className="navbar">
          <LayoutNavbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
