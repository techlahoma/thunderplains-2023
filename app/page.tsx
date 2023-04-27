import Image from 'next/image';
import { H2 } from '../components/HTML';

// Images/assets
import OKCCCImage from '../assets/img/okccc_night_vlucas.jpg';

export default function Home() {
  return (
    <>
      <header>
        <div className="relative overflow-hidden" style={{ minHeight: '50vh' }}>
          <Image
            className=""
            style={{ zIndex: 9 }}
            src={OKCCCImage}
            alt="OKC Convention Center"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="m-auto p-14 bg-violet-900 text-white border-t border-gray-200">
          <section className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-12 m-auto text-white">
            <h1 className="font-bold text-4xl">ThunderPlains Developer Conference</h1>
            <h3 className="mt-2 font-bold text-xl">
              November 11<sup>th</sup> 2023 ⚡️ Oklahoma City
            </h3>
          </section>
        </div>
      </header>
      <section id="schedule" className="text-center py-40">
        <H2>Schedule / Speakers</H2>
        <p className="py-4">
          Our Call for Papers (CFP) is open! If you would like to speak at ThunderPlains this year,
          please submit your talk idea(s) for consideration.
        </p>
        <p className="py-4">
          Selected speakers will get a free ticket to the conference and all required travel and
          lodging paid for by Techlahoma.
        </p>
        <a
          href="https://www.papercall.io/tplains"
          className="inline-block py-4 px-8 text-white text-xl bg-fuchsia-700 hover:bg-fuchsia-600"
        >
          Submit to our CFP
        </a>
      </section>
      <section id="sponsors" className="text-center py-40">
        <H2>Sponsors</H2>
        <p className="py-4">Sponsors help make our conference happen!</p>
        <p className="py-4">
          Sponsorship options include logos and links on the website, slides, emails, and other
          promotional material. We can also set you up with a booth at our conference.
        </p>
      </section>
    </>
  );
}
