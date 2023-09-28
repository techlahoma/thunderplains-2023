import './globals.css';
import { Ruda } from 'next/font/google';
import LayoutNavbar from '../components/layout/LayoutNavbar';

const fontRuda = Ruda({ subsets: ['latin'] });
export const metadata = {
  title: 'ThunderPlains 2023 Developer Conference',
  description: 'ThunderPlains Developer Conference - Web and JavaScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta content="ThunderPlains Developer Conference" name="description" />
        <meta name="author" content="Vance Lucas" />
        <title>ThunderPlains 2023</title>
      </head>
      <body style={fontRuda.style} className="text-lg">
        <header className="navbar">
          <LayoutNavbar />
        </header>
        <main>{children}</main>
        <footer className="bg-violet-950 border-t border-gray-200 p-10 text-white text-center">
          ThunderPlains is a <a href="https://www.techlahoma.org">Techlahoma</a> event organized by{' '}
          <a href="https://vancelucas.com">Vance Lucas</a> and many other volunteers.
          <p className="py-8 text-md">
            Previous Years:{' '}
            <a
              title="Sorry, no website is available :("
              className="text-gray-200 no-underline cursor-not-allowed"
            >
              2022
            </a>{' '}
            | <a href="http://2021.thunderplainsconf.com">2021</a> |{' '}
            <a href="http://2020.thunderplainsconf.com">2020</a> |{' '}
            <a href="http://2019.thunderplainsconf.com">2019</a> |{' '}
            <a href="http://2018.thunderplainsconf.com">2018</a> |{' '}
            <a href="http://2017.thunderplainsconf.com">2017</a> |{' '}
            <a href="http://2016.thunderplainsconf.com">2016</a> |{' '}
            <a href="http://2015.thunderplainsconf.com">2015</a> |{' '}
            <a href="http://2014.thunderplainsconf.com">2014</a> |{' '}
            <a href="http://2013.thunderplainsconf.com">2013</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
