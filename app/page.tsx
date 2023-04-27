//import Link from 'next/link';
import Image from 'next/image';
import { H1, H2, H3 } from '../components/HTML';

// Images/assets
import ThunderPlainsLogo from '../assets/img/thunderplains-logo-transparent.png';
import OKCCCImage from '../assets/img/okccc_night_vlucas.jpg';

export default function Home() {
  return (
    <div className="relative min-h-[50%] overflow-hidden">
      <Image
        className=""
        style={{ zIndex: 9 }}
        src={OKCCCImage}
        alt="OKC Convention Center"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="min-h-1/2 bg-indigo-800 text-white py-20" style={{ zIndex: 10 }}>
        <section className="w-lg m-auto text-center text-white">
          <H1>
            <Image
              className="m-auto"
              src={ThunderPlainsLogo}
              alt="ThunderPlains Logo"
              width={600}
            />
          </H1>
          <H2>ThunderPlains Developer Conference</H2>
          <H3>
            November 11<sup>th</sup> 2023 ⚡️ Oklahoma City
          </H3>
        </section>
      </div>
    </div>
  );
}
