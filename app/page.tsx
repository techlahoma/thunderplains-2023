import Image from 'next/image';
import { H2 } from '../components/HTML';

// Images/assets
import OKCCCImage from '../assets/img/okccc_night_vlucas.jpg';
import SponsorHeartlandLogo from '../assets/sponsors/heartland-red.png';

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
        <div className="py-4">
          <table className="w-full">
            <tr>
              <td className="bg-violet-300">9:00 am</td>
              <td colSpan={2} className="bg-slate-200">
                Welcome &amp; 10-Year ThunderPlains Recap
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">9:30 am</td>
              <td className="w-[45%]">
                <em>Garrett Bland</em> &mdash;{' '}
                <strong>Understanding JavaScript's Event Loop and Callstack</strong>
              </td>
              <td className="w-[45%]">
                <em>Speaker TBA</em> &mdash; <strong>Topic TBA</strong>
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">10:30 am</td>
              <td>
                <em>Alex Riviere</em> &mdash; <strong>Implementing Small Systems Design</strong>
              </td>
              <td>
                <em>Elena Haskins</em> &mdash;{' '}
                <strong>
                  Secret Weapon to Bridge Developers and Designers: Object Oriented User Experience
                  (OOUX)
                </strong>
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">11:30 am</td>
              <td>
                <em>Adam Rackis</em> &mdash;{' '}
                <strong>The Bleeding &quot;Edge&quot; of Web Development</strong>
              </td>
              <td>
                <em>Rebecca Hartwig</em> &mdash; <strong>Topic TBA</strong>
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">12:30 pm</td>
              <td colSpan={2} className="bg-slate-200">
                Lunch Break (12:30 - 1:30 pm)
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">1:30 pm</td>
              <td>
                <em>Matt Jones</em> &mdash; <strong>Why we chose Blazor over React and Vue</strong>
              </td>
              <td className="bg-slate-50">
                <em>Various Speakers &amp; Attendees</em>
                <strong>⚡️ Lightning Talks</strong>
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">2:30 pm</td>
              <td>
                <em>Speaker TBA</em> &mdash; <strong>Topic TBA</strong>
              </td>
              <td className="bg-slate-50">
                <em>Various Speakers &amp; Attendees</em>
                <strong>⚡️ Lightning Talks</strong>
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">3:30 pm</td>
              <td>
                <em>Speaker TBA</em> &mdash; <strong>Topic TBA</strong>
              </td>
              <td>
                <em>Anna Asher</em> &mdash;{' '}
                <strong>
                  Mastering the Discovery interview: How to excavate insights that drive disruptive
                  innovation
                </strong>
              </td>
            </tr>
            <tr>
              <td className="bg-violet-300">6:00 pm</td>
              <td colSpan={2} className="bg-slate-200">
                Afterparty with OKC Tech++
              </td>
            </tr>
          </table>
        </div>
        <p className="py-4 mt-6">
          <em>*TBA Slots</em> - We are still waiting for final confirmation from some speakers.
        </p>
      </section>

      <section id="sponsors" className="text-center py-40 px-8 bg-violet-100">
        <H2>Sponsors</H2>

        <div className="py-4 flex">
          <div className="m-auto border-8 border-violet-200">
            <a href="https://www.heartland.us">
              <Image
                src={SponsorHeartlandLogo}
                alt="Heartland Payments"
                width={450}
                className="p-8 bg-white"
              />
            </a>
          </div>
        </div>

        <p className="py-4 mt-10">Sponsors help make our conference happen!</p>
        <p className="py-4">
          Sponsorship options include logos and links on the website, slides, emails, and other
          promotional material. We can also set you up with a booth at our conference.
        </p>
        <a
          href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link"
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
