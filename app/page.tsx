import Image from 'next/image';
import { H2 } from '../components/HTML';

// Images/assets
import Sponsor36dnLogo from '../assets/sponsors/36dn.png';
import SponsorBitnessLabsLogo from '../assets/sponsors/bitness_labs.png';
import SponsorClevyrLogo from '../assets/sponsors/clevyr.png';
import SponsorHeartlandLogo from '../assets/sponsors/heartland-red.png';
import SponsorNodecraftLogo from '../assets/sponsors/nodecraft.png';
import SponsorOfAshAndFireLogo from '../assets/sponsors/of_ash_and_fire.jpg';
import SponsorSimiancraftLogo from '../assets/sponsors/simiancraft.jpeg';
import SponsorTitanLogo from '../assets/sponsors/titan.png';
import SponsorVergeLogo from '../assets/sponsors/verge-black.png';
import TPlains10Logo from '../assets/img/tplains_10_icon.png';
import eventBadge from '../assets/img/event-details_badge.svg';
import NewViewOklahomaLogo from '../assets/img/newview-oklahoma.svg';
import scheduleBG from '../assets/img/schedule_bg-img.svg';
import SpeakerAdamRackisPic from '../assets/speakers/adam-rackis.jpeg';
import SpeakerAlexRivierePic from '../assets/speakers/alex-riviere.jpg';
import SpeakerAnnaAsherPic from '../assets/speakers/anna-asher.jpg';
import SpeakerAndrewColeburnPic from '../assets/speakers/andrew-coleburn.png';
import SpeakerElenaHaskinsPic from '../assets/speakers/elena-haskins.jpg';
import SpeakerGarrettBlandPic from '../assets/speakers/garrett-bland.png';
import SpeakerKassieMcClungPic from '../assets/speakers/kassie-mcclung.png';
import SpeakerMatthewReilyPic from '../assets/speakers/matthew-reily.png';
import SpeakerMattJonesPic from '../assets/speakers/matt-jones.jpg';
import SpeakerRebeccaHartwigPic from '../assets/speakers/rebecca-hartwig.jpg';
import SpeakerRonDagdagPic from '../assets/speakers/ron-dagdag.jpg';

export default function Home() {
  return (
    <>
      <header className="tplains-header">
        <section className="flex flex-wrap">
          <div className="text-wrapper">
            <h1>
              <span className="info">Nov. 10, 2023 | OKC, OK</span>
              ThunderPlains
              <span className="subHead">Developer Conference</span>
            </h1>
            <p className="intro">
              Celebrating 10 great years as Oklahoma’s premier tech conference.
            </p>

            <a href="https://ti.to/techlahoma/thunderplains2023" className="primary-btn">
              Save Your Seat!
            </a>
          </div>
          <div className="img-wrapper">
            <Image
              style={{ zIndex: 9 }}
              src={TPlains10Logo}
              alt="ThunderPlains 10-Year Anniversary Logo"
            />
          </div>
        </section>
      </header>
      {/*<section id="quote">
        <blockquote>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.”
          </p>
          <cite>Quote Person Name</cite>
        </blockquote>
      </section>*/}
      <section id="about">
        <div className="row-wrapper flex">
          <div className="flex-1">
            <div className="about-box-grid">
              <div className="about-box">
                <span>JS</span>
              </div>
              <div className="about-box">
                <span>HTML</span>
              </div>
              <div className="about-box">
                <span>CSS</span>
              </div>
              <div className="about-box">
                <span>UX</span>
              </div>
              <div className="about-box">
                <span>DX</span>
              </div>
              <div className="about-box">
                <span>
                  <span>And</span>More
                </span>
              </div>
            </div>
          </div>
          <div className="about-copy flex-1">
            <h3>An Electrifying Tech Event You Don't Want to Miss</h3>
            <p>
              Get ready to dive into a day filled with mind-blowing talks and networking
              opportunities with industry experts. Whether you're a seasoned developer or just
              starting out, ThunderPlains has something for everyone.
            </p>
            <p>
              Explore the latest trends, gain valuable insights, and connect with like-minded
              individuals who share your passion for technology. Don't let this chance slip away –
              mark your calendars and get ready to be thunderstruck at ThunderPlains!
            </p>
          </div>
        </div>
      </section>
      <section id="details">
        <div className="svg-wrapper">
          <svg viewBox="0 0 1440 197" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 105.542L1444 0.675171V179.935H4V105.542Z"
              fill="#931CAD"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1442 173.229L6.10352e-05 46.3397V197H1442L1442 173.229Z"
              fill="#5E1279"
            />
            <rect
              x="-37.6386"
              y="160.284"
              width="1489.62"
              height="16"
              transform="rotate(-4 -37.6386 160.284)"
              fill="#959596"
            />
            <rect
              x="-37.6386"
              y="187.173"
              width="1489.62"
              height="9"
              transform="rotate(-4 -37.6386 187.173)"
              fill="#7EA3B1"
            />
            <rect
              x="-37.6386"
              y="140.395"
              width="1489.62"
              height="9"
              transform="rotate(-4 -37.6386 140.395)"
              fill="#7EA3B1"
            />
          </svg>
        </div>
        <div className="details-content">
          <div className="row-wrapper flex">
            <div className="event-details">
              <h2>Event Details</h2>
              <div className="details-container">
                <div className="detail">
                  <h3>Date:</h3>
                  <p>November 10, 2023</p>
                </div>
                <div className="detail">
                  <h3>Venue:</h3>
                  <a href="https://okcconventioncenter.com/">Oklahoma City Convention Center</a>
                </div>
                <div className="detail">
                  <h3>Time:</h3>
                  <p>9:00am-4:30pm</p>
                </div>
              </div>
              <a
                href="https://docs.google.com/document/d/1SOY5c8O0WOtmM4umjgPeLH0EHPywXBrVLn9tnZWmq5o/edit"
                className="primary-btn"
              >
                What to Tell My Boss (PDF)
              </a>
              <div className="badge-wrapper">
                <div className="icon-wrap">
                  <Image src={eventBadge} width={195} height={184} alt="ThunderPlains Badge" />
                  <span>Learn from the best!</span>
                </div>
                <div className="badge-copy">
                  <p>
                    Stay current on the latest in tech from thought leaders across the industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="speaker-wrapper">
              <div className="speakers-list ">
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerAdamRackisPic} alt="Adam Rackis" />
                  </div>
                  <div className="person-name">
                    <h4>Adam Rackis</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerAlexRivierePic} alt="Alex Riviere" />
                  </div>
                  <div className="person-name">
                    <h4>Alex Riviere</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerAndrewColeburnPic} alt="Andrew Coleburn" />
                  </div>
                  <div className="person-name">
                    <h4>Andrew Coleburn</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerAnnaAsherPic} alt="Anna Asher" />
                  </div>
                  <div className="person-name">
                    <h4>Anna Asher</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerElenaHaskinsPic} alt="Elena Haskins" />
                  </div>
                  <div className="person-name">
                    <h4>Elena Haskins</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerGarrettBlandPic} alt="Garrett Bland" />
                  </div>
                  <div className="person-name">
                    <h4>Garrett Bland</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerKassieMcClungPic} alt="Kassie McClung" />
                  </div>
                  <div className="person-name">
                    <h4>Kassie McClung</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerMattJonesPic} alt="Matt Jones" />
                  </div>
                  <div className="person-name">
                    <h4>Matt Jones</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerMatthewReilyPic} alt="Matthew Reily" />
                  </div>
                  <div className="person-name">
                    <h4>Matthew Reily</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerRebeccaHartwigPic} alt="Rebecca Hartwig" />
                  </div>
                  <div className="person-name">
                    <h4>Rebecca Hartwig</h4>
                  </div>
                </div>
                <div className="person-wrapper">
                  <div className="hs-wrap">
                    <Image src={SpeakerRonDagdagPic} alt="Ron Dagdag" />
                  </div>
                  <div className="person-name">
                    <h4>Ron Dagdag</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="text-center">
        <div className="bg-img">
          <Image src={scheduleBG} alt="ThunderPlains Badge" fill />
        </div>
        <h2>Schedule</h2>

        <div className="schedule-container">
          <div className="bg-violet-300 schedule-cell">9:00 am</div>
          <div className="bg-slate-200 schedule-cell">
            <em>Vance Lucas</em> &mdash; <strong>Welcome &amp; 10-Year ThunderPlains Recap</strong>
          </div>
          <div className="schedule-cell">
            <p className="text-sm">We'll start the day with one combined session in room 301, 
            and then we'll split the room into two for tracks AB and CD.</p>
            <p className="text-sm">CD will be on the left side, and AB will be on the right side.</p>
          </div>

          <div className="bg-violet-300 schedule-cell">9:30 am</div>
          <div className="md:flex schedule-row">
            <div className="md:w-[50%] schedule-cell">
              <em>Garrett Bland</em> &mdash;{' '}
              <strong>Understanding JavaScript's Event Loop and Callstack</strong> &mdash;{' '} AB
            </div>
            <div className="md:w-[50%] schedule-cell">
              <em>Matthew Reily</em> &mdash;{' '}
              <strong>Building a Data-Driven Culture with Observability</strong> &mdash;{' '} CD
            </div>
          </div>

          <div className="bg-violet-300 schedule-cell">10:30 am</div>
          <div className="md:flex schedule-row">
            <div className="md:w-[50%] schedule-cell">
              <em>Alex Riviere</em> &mdash; <strong>Implementing Small Systems Design</strong> &mdash;{' '} AB
            </div>
            <div className="md:w-[50%] schedule-cell">
              <em>Elena Haskins</em> &mdash;{' '}
              <strong>
                Secret Weapon to Bridge Developers and Designers: Object Oriented User Experience
                (OOUX)
              </strong> &mdash;{' '} CD
            </div>
          </div>

          <div className="bg-violet-300 schedule-cell">11:30 am</div>
          <div className="md:flex schedule-row">
            <div className="md:w-[50%] schedule-cell">
              <em>Adam Rackis</em> &mdash;{' '}
              <strong>The Bleeding &quot;Edge&quot; of Web Development</strong> &mdash;{' '} AB
            </div>
            <div className="md:w-[50%] schedule-cell">
              <em>Ron Dagdag</em> &mdash; <strong>Mixed Reality for JavaScript Developers</strong> &mdash;{' '} CD
            </div>
          </div>

          <div className="bg-slate-200 schedule-cell">Lunch Break (12:30 &mdash; 1:30pm)</div>

          <div className="bg-violet-300 schedule-cell">1:30 pm</div>
          <div className="md:flex schedule-row">
            <div className="md:w-[50%] schedule-cell">
              <em>Rebecca Hartwig</em> &mdash; <strong>Networking... a necessary evil</strong> &mdash;{' '} AB
            </div>
            <div className="md:w-[50%] schedule-cell">
              <em>Anna Asher and Kassie McClung</em> &mdash;{' '}
              <strong>
                Mastering the Discovery interview: How to excavate insights that drive disruptive
                innovation
              </strong> &mdash;{' '} CD
            </div>
          </div>

          <div className="bg-violet-300 schedule-cell">2:30 pm</div>
          <div className="md:flex schedule-row">
            <div className="md:w-[50%] schedule-cell">
              <em>Matt Jones</em> &mdash; <strong>Why we chose Blazor over React and Vue</strong> &mdash;{' '} AB
            </div>
            <div className="md:w-[50%] schedule-cell">
              <em>Various Speakers &amp; Attendees</em>
              <strong>⚡️ Lightning Talks</strong> &mdash;{' '} CD
            </div>
          </div>

          <div className="bg-violet-300 schedule-cell">3:30 pm</div>
          <div className="md:flex schedule-row">
            <div className="md:w-[50%] schedule-cell">
              <em>Andrew Coleburn</em> &mdash;{' '}
              <strong>
                Out of the Frying Pan, Into the Fire: A new Dev's Guide to Navigating Unfamiliar
                Codebases
              </strong> &mdash;{' '} AB
            </div>
            <div className="md:w-[50%] schedule-cell">
              <em>Various Speakers &amp; Attendees</em>
              <strong>⚡️ Lightning Talks</strong> &mdash;{' '} CD
            </div>
          </div>

          <div className="bg-violet-300 schedule-cell">5:30 pm</div>
          <div className="bg-slate-200 schedule-cell">
            <p>
              <a href="https://www.eventbrite.com/e/okc-tech-november-2023-official-thunderplains-after-party-tickets-735853316077">
                Afterparty with OKC Tech++
              </a>
            </p>
            <p>
              <strong>Separate registration is required.</strong> Free for ThunderPlains attendees.
            </p>
            <p className="text-sm">
              Afterparty is 3 blocks away from the Convention Center, and is{' '}
              <a href="https://maps.app.goo.gl/MLr8YghyJmnn9rX5A">walkable</a> with good weather.
            </p>
          </div>
        </div>
      </section>

      <section id="tickets">
        <div className="flex">
          <div className="ticket-wrap">
            <div className="ticket-info">
              <header>
                <h3>
                  Student<span>Admission</span>
                </h3>
              </header>
              <div className="t-details">
                <h4>Keep the learning going at ThunderPlains 2023!</h4>
                <p>
                  From traditional universities, to trade school to teaching yourself freeCodeCamp,
                  if you identify as a student, we think you’re one too!
                </p>
              </div>
              <footer className="ticket-footer">
                <a href="https://ti.to/techlahoma/thunderplains2023" className="primary-btn">
                  $100 per seat
                </a>
              </footer>
            </div>
          </div>
          <div className="ticket-wrap">
            <div className="ticket-info">
              <header>
                <h3>
                  General<span>Admission</span>
                </h3>
              </header>
              <div className="t-details">
                <h4>A full day of speakers and talks, networking and more.</h4>
                <p>
                  Individual admission to the full day of ThunderPlains conference speakers and
                  lightning talks.
                </p>
              </div>
              <footer className="ticket-footer">
                <a href="https://ti.to/techlahoma/thunderplains2023" className="primary-btn">
                  $175 per seat
                </a>
              </footer>
            </div>
          </div>
          <div className="ticket-wrap">
            <div className="ticket-info">
              <header>
                <h3>
                  Professional<span>Admission</span>
                </h3>
              </header>
              <div className="t-details">
                <h4>Empower employees through professional development.</h4>
                <p>
                  Help keep the conference affordable for everyone, especially students and those
                  requiring a grant. Government employees should also register at the corporate
                  rate.
                </p>
              </div>
              <footer className="ticket-footer">
                <a href="https://ti.to/techlahoma/thunderplains2023" className="primary-btn">
                  $275 per seat
                </a>
              </footer>
            </div>
          </div>
        </div>
        <div className="newview">
          <div className="newview-text">
            <p>
              <a href="https://nvoklahoma.org/">NewView Oklahoma</a> has provided us with a
              presentation on{' '}
              <a href="https://newviewoklahoma345-my.sharepoint.com/:f:/g/personal/phampton_newviewoklahoma_org/EihzVnfrYZtEmf_YAiDF9SsB6QQU-k83z1tX9l9w52tH8Q?e=UzAa2W">
                Building the Perfect PDF
              </a>
              !
            </p>
          </div>
          <div className="newview-logo">
            <a href="https://nvoklahoma.org/">
              <Image src={NewViewOklahomaLogo} alt="NewView Oklahoma" />
            </a>
          </div>
        </div>
      </section>
      <section id="faq">
        <div className="row-wrapper">
          <div className="faq-wrapper">
            <h2>F.A.Q.</h2>
            <div className="faq-list">
              <div className="faq-wrap">
                <h3 className="faq-q">Q: Where is ThunderPlains this year?</h3>
                <div className="faq-a">
                  <p>
                    ThunderPlains will be on the third floor of the new{' '}
                    <a href="https://okcconventioncenter.com">Oklahoma City Convention Center</a> in
                    downtown Oklahoma City, OK.
                  </p>
                  <p>
                    If you've never been to Oklahoma City before, it's actually really nice! It's
                    not all cowboys and wheat fields! 🤠
                  </p>
                </div>
              </div>
              <div className="faq-wrap">
                <h3 className="faq-q">Q: Where should I park?</h3>
                <div className="faq-a">
                  <a href="https://okcconventioncenter.com/attend/directions-parking/">
                    Convention Center Parking
                  </a>
                  <p>15 SW 4th St., Entrance on Cornett Drive</p>
                  <p>Monthly, hourly, daily, valet available</p>
                  <p>1,105 Total Spaces | 24 ADA Accessible Space</p>
                </div>
              </div>
              <div className="faq-wrap">
                <h3 className="faq-q">Q: I sometimes get hungry. Will there be food?</h3>
                <div className="faq-a">
                  <p>
                    What kind of conference would we be with no food?! Coffee service will be
                    available in the morning and a full lunch will be provided. If you have dietary
                    restrictions, please list them on your registration form.
                  </p>
                </div>
              </div>
              <div className="faq-wrap">
                <h3 className="faq-q">
                  Q: What are lightning talks, and how will those sessions work?
                </h3>
                <div className="faq-a">
                  <p>
                    A lightning talk is your opportunity to speak on a{' '}
                    <a href="https://github.com/techlahoma/lightning-talks/blob/main/adopt-a-talk.md">
                      topic
                    </a>{' '}
                    of your choice for up to 5 minutes. Aaron Krauss and Erich Keil are hosting and
                    organizing the lightning talk sessions. They will have a signup at the event for
                    some speaker slots, but they also have some slots that you can sign up for now.
                    If you're interested, contact Aaron or Erich, or find their booth at the
                    conference!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sponsors" className="text-center">
        <div className="row-wrapper">
          <h2>Thanks to Our Sponsors</h2>
          <p className="intro">
            We are grateful to our amazing sponsors who help make our conference happen! Thank you
            for celebrating tech in Oklahoma and supporting the 10th Anniversary ThunderPlains!
          </p>
          <div className="sponsor-group gold-sponsors">
            <header className="sponsor-header">
              <h3 id="gold">Gold Sponsors</h3>
              <a href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link">
                Become A Gold Sponsor
              </a>
            </header>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://www.ofashandfire.com/">
                    <Image
                      src={SponsorOfAshAndFireLogo}
                      alt="Of Ash and Fire"
                      width={450}
                      height={450}
                    />
                  </a>
                  <h4>
                    Of Ash and Fire
                    <span>Lunch Sponsor</span>
                  </h4>
                </div>
              </div>
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://www.vergeokc.com/">
                    <Image src={SponsorVergeLogo} alt="The Verge" width={450} height={450} />
                  </a>
                  <h4>
                    The Verge OKC
                    <span>After-Party Sponsor</span>
                  </h4>
                </div>
              </div>
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://www.heartland.us">
                    <Image
                      src={SponsorHeartlandLogo}
                      alt="Heartland Payments"
                      width={450}
                      height={450}
                    />
                  </a>
                  <h4>Heartland Payments</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="sponsor-group silver-sponsors">
            <header className="sponsor-header">
              <h3 id="silver">Silver Sponsors</h3>
              <a href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link">
                Become A Silver Sponsor
              </a>
            </header>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://simiancraft.com/">
                    <Image
                      src={SponsorSimiancraftLogo}
                      alt="Simiancraft"
                      width={450}
                      height={450}
                    />
                  </a>
                  <h4>
                    Simiancraft
                    <span>Exclusive Recording Sponsor</span>
                  </h4>
                </div>
              </div>
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://www.titanprojobs.com/">
                    <Image
                      src={SponsorTitanLogo}
                      alt="Titan Professional Resources"
                      width={450}
                      height={450}
                    />
                  </a>
                  <h4>
                    Titan Professional Resources
                    <span>Booth Sponsor</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="sponsor-group bronze-sponsors">
            <header className="sponsor-header">
              <h3 id="bronze">Bronze Sponsors</h3>
              <a href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link">
                Become A Bronze Sponsor
              </a>
            </header>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <div className="s-wrap"></div>
              </div>
            </div>
          </div>
          <div className="sponsor-group local-np-sponsors">
            <header className="sponsor-header">
              <h3 id="local">Local/Community Sponsors</h3>
              <a href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link">
                Become A Local Sponsor
              </a>
            </header>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://bitnesslabs.com/">
                    <Image
                      src={SponsorBitnessLabsLogo}
                      alt="Bitness Labs"
                      width={450}
                      height={450}
                    />
                  </a>
                  <h4>Bitness Labs</h4>
                </div>
              </div>
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://clevyr.com/">
                    <Image src={SponsorClevyrLogo} alt="Clevyr" width={450} height={450} />
                  </a>
                  <h4>Clevyr</h4>
                </div>
              </div>
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://nodecraft.com/">
                    <Image src={SponsorNodecraftLogo} alt="Nodecraft" width={450} height={450} />
                  </a>
                  <h4>Nodecraft</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="sponsor-group inkind-sponsors">
            <header className="sponsor-header">
              <h3 id="inkind">In-Kind Sponsors</h3>
              <a href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link">
                Become An In-Kind Sponsor
              </a>
            </header>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <div className="s-wrap">
                  <a href="https://www.36n.co/">
                    <Image src={Sponsor36dnLogo} alt="36 Degrees North" width={450} height={450} />
                  </a>
                  <h4>36 Degrees North</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-wrapper">
          <h3 className="py-4 mt-10">Join Our Sponsorship List</h3>
          <p>
            Sponsorship options include logos and links on the website, slides, emails, and other
            promotional material. We can also set you up with a booth at our conference.
          </p>
          <a
            href="https://drive.google.com/file/d/1sXYsG1bOBLhF2yrSkM3BDmJkyYm2aa2J/view?usp=drive_link"
            className="primary-btn"
          >
            Sponsor ThunderPlains 2023
          </a>
        </div>
      </section>

      <section id="email-my-boss" className="text-center py-40 px-8 bg-violet-100">
        <H2>Email My Boss</H2>
        <p className="py-4">Need to convince your boss you should attend ThunderPlains?</p>
        <p className="py-4">
          We got you covered! Just replace all the <strong>bolded</strong> spots with your info!
        </p>
        <a
          href="https://docs.google.com/document/d/1SOY5c8O0WOtmM4umjgPeLH0EHPywXBrVLn9tnZWmq5o/edit"
          className="mt-4 inline-block py-4 px-8 text-white text-xl bg-fuchsia-800 hover:bg-fuchsia-700"
        >
          Email My Boss
        </a>
      </section>
    </>
  );
}
