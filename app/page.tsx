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
        <div className="m-auto p-14 px-8 bg-violet-900 text-white border-t border-gray-200">
          <section className="flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-12 m-auto text-white">
            <h1 className="font-bold text-4xl">ThunderPlains Developer Conference</h1>
            <h3 className="mt-2 font-bold text-xl">
              November 10<sup>th</sup> 2023 ⚡️ Oklahoma City
            </h3>
          </section>
        </div>
      </header>

      <section id="schedule" className="text-center py-40 px-8">
        <H2>Schedule / Speakers</H2>
        <p className="py-4 mt-10">
          Our Call for Papers (CFP) is open! If you would like to speak at ThunderPlains this year,
          please submit your talk idea(s) for consideration.
        </p>
        <p className="py-4">
          Selected speakers will get a free ticket to the conference and all required travel and
          lodging paid for by Techlahoma.
        </p>
        <a
          href="https://www.papercall.io/tplains"
          className="mt-4 inline-block py-4 px-8 text-white text-xl bg-fuchsia-800 hover:bg-fuchsia-700"
        >
          Submit to our CFP
        </a>
      </section>

      <section id="sponsors" className="text-center py-40 px-8 bg-violet-100">
        <H2>Sponsors</H2>
        <p className="py-4 mt-10">Sponsors help make our conference happen!</p>
        <p className="py-4">
          Sponsorship options include logos and links on the website, slides, emails, and other
          promotional material. We can also set you up with a booth at our conference.
        </p>
        <a
          href="/docs/2023-Sponsorship-Prospectus-ThunderPlains.pdf"
          className="mt-4 inline-block py-4 px-8 text-white text-xl bg-fuchsia-800 hover:bg-fuchsia-700"
        >
          Sponsor ThunderPlains 2023
        </a>
      </section>

      <section id="faq" className="text-center py-40 px-8">
        <H2>F.A.Q.</H2>
        <dl className="py-4 mt-10 max-w-xl m-auto">
          <dt className="font-bold my-4">Q: Where is ThunderPlains This Year?</dt>
          <dd className="mb-10">
            <p>
              ThunderPlains will be at the new{' '}
              <a href="https://okcconventioncenter.com">Oklahoma City Convention Center</a> in
              downtown Oklahoma City, OK.
            </p>
            <p className="mt-6">
              If you've never been to Oklahoma City before, it's actually really nice! It's not all
              cowboys and wheat fields! 🤠
            </p>
          </dd>

          <dt className="font-bold my-4">Q: Where should I park?</dt>
          <dd className="mb-10">
            <a href="https://okcconventioncenter.com/attend/directions-parking/">
              Convention Center Parking
            </a>
            <br />
            <br />

            <p>15 SW 4th St., Entrance on Cornett Drive</p>
            <p>Monthly, hourly, daily, valet available</p>
            <p>1,105 Total Spaces | 24 ADA Accessible Space</p>
          </dd>

          <dt className="font-bold my-4">Q: I sometimes get hungry. Will there be food?</dt>
          <dd className="mb-10">
            What kind of conference would we be with no food?! Light breakfast with coffee and a
            full lunch will be provided. If you have dietary restrictions, please list them on your
            registration form.
          </dd>
        </dl>
      </section>
    </>
  );
}
