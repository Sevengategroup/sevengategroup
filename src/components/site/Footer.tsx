import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from '@hugeicons/react';
import { Facebook01Icon, Linkedin01FreeIcons, NewTwitterFreeIcons, TwitterFreeIcons, TwitterIcon, YoutubeIcon } from '@hugeicons/core-free-icons';
import logo from "../../assets/newest-logo.png";



export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground border-t border-white/10 pt-16 pb-12 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Logo, Contact & Socials */}
          <div className="col-span-1 flex flex-col gap-6 pt-6">
            <img loading="lazy" src={logo} alt="Sevengate Logo" className="h-12 w-auto object-contain self-start brightness-0 invert" />
            <div className="flex flex-col gap-6">
              <a href="mailto:info@sevengategroup.com" className="text-white/60 hover:text-white transition-colors font-sans text-sm">
                adminoffice@sevengategroup.com
              </a>
              <div className="flex flex-col text-white/60 font-sans text-sm gap-1">
                <span>+234 - 916 641 8189</span>
                <span>+234 803 072 6373</span>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center text-[#1877F2] hover:opacity-80 transition-opacity">
                  <HugeiconsIcon icon={Facebook01Icon} className="w-6 h-6" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center text-[#1DA1F2] hover:opacity-80 transition-opacity">
                  <HugeiconsIcon icon={NewTwitterFreeIcons} className="w-6 h-6" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center text-[#FF0000] hover:opacity-80 transition-opacity">
                  <HugeiconsIcon icon={YoutubeIcon} className="w-6 h-6" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center text-[#3467C2] hover:opacity-80 transition-opacity">
                  <HugeiconsIcon icon={Linkedin01FreeIcons} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Abuja Office */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="w-8 h-[2px] bg-accent"></div>
            <h3 className="font-display font-bold text-white uppercase tracking-wide text-lg mt-1">
              Abuja Office
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              14 Sambrerio Close<br />
              Off Limpopo Street<br />
              Maitama, F.C.T - Abuja, Nigeria.
            </p>
          </div>

          {/* Column 3: Lagos Office */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="w-8 h-[2px] bg-accent"></div>
            <h3 className="font-display font-bold text-white uppercase tracking-wide text-lg mt-1">
              Lagos Office / Equipment Yard
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Km 22 Lagos-Ibadan Expressway<br />
              Asese Town, Ogun State, Nigeria.
            </p>
          </div>

          {/* Column 4: Enugu Office */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="w-8 h-[2px] bg-accent"></div>
            <h3 className="font-display font-bold text-white uppercase tracking-wide text-lg mt-1">
              Enugu Office/Factory
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Plot C-20, PRODA Road<br />
              Emene Industrial Layout<br />
              Enugu, Enugu State, Nigeria.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
          <p className="text-white/60 text-xs font-sans">
            &copy; {currentYear} Sevengate Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-sans text-white/60">
            <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link to="/subsidiaries" className="hover:text-accent transition-colors">Subsidiaries</Link>
            <Link to="/services/oil-and-gas" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/career" className="hover:text-accent transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>

        {/* Large Brand Name like Gucci */}
        {/* <div className="w-full flex justify-center items-center overflow-hidden pb-4">
          <span
            className="text-[12.5vw] leading-none text-white font-normal whitespace-nowrap select-none"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              letterSpacing: '0.02em'
            }}
          >
            SEVENGATE
          </span>
        </div> */}
      </div>
    </footer>
  );
}

