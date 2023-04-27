import Image from 'next/image';
import TPBolt from '../../assets/img/kapow@2x.png';

export default function LayoutNavbar() {
  return (
    <nav className="bg-violet-950 text-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center no-underline">
          <Image
            src={TPBolt}
            width={16}
            height={16}
            className="animate animate-pulse ml-2 mr-3"
            alt="ThunderPlains Bolt"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            ThunderPlains
          </span>
        </a>
        <div className="flex md:order-2">
          <a
            href="https://www.techlahoma.org/tickets-arent-available"
            className="block text-white bg-fuchsia-700 hover:bg-fuchsia-600 focus:ring-2 focus:outline-none focus:ring-fuchsia-300 font-medium font-bold text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Get Tickets
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white md:hidden hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#schedule"
                className="block py-2 pl-3 pr-4 text-white md:p-0 hover:bg-violet-800"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className="block py-2 pl-3 pr-4 text-white md:p-0 hover:bg-violet-800"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a href="#faq" className="block py-2 pl-3 pr-4 text-white md:p-0 hover:bg-violet-800">
                F.A.Q.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
