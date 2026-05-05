"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-column logo-column">
          <Link className="footer-logo" href="/" aria-label="GameIgnix">
            <Image src="/common/logo.webp" alt="gameignix logo" width={170} height={170} className="max-w-full h-auto flex-shrink-0" />
          </Link>
          <p className="tagline font-bold">Featured on</p>
          <ul className="list-none cli-lis mb-4">
            <li>
              <Link href="https://clutch.co/profile/gameignix" aria-label="Gameignix Featured On Clutch">
                <Image src="/common/logo/clutch.webp" alt="Gameignix Featured On Clutch" width={90} height={24} className="max-w-full h-auto flex-shrink-0 object-contain" />
              </Link>
            </li>
            <li>
              <Link href="https://www.designrush.com/" aria-label="Gameignix Featured On Designrush">
                <Image src="/common/logo/designrush.webp" alt="Gameignix Featured On Designrush" width={90} height={24} className="max-w-full h-auto flex-shrink-0 object-contain" />
              </Link>
            </li>
            <li>
              <Link href="https://www.goodfirms.co/company/gameignix" aria-label="Gameignix Featured On Goodfirms">
                <Image src="/common/logo/goodfirms.webp" alt="Gameignix Featured On Goodfirms" width={90} height={24} className="max-w-full h-auto flex-shrink-0 object-contain" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="mb-4">
            <li><Link href="#" aria-label="About us">About us</Link></li>
            <li><Link href="services" target="_blank" aria-label="Service">Service</Link></li>
            <li><Link href="#" aria-label="Our Game portfolio">Our Game portfolio</Link></li>
            <li><Link href="#" aria-label="Case study">Case study</Link></li>
            <li><Link href="#" aria-label="Development Agency">Development Agency</Link></li>
            <li><Link href="#" aria-label="Banner">Banner</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="mb-4">
            <li><Link href="#" aria-label="Tools and Technology">Tools and Technology</Link></li>
            <li><Link href="#" aria-label="Engines">Engines</Link></li>
            <li><Link href="#" aria-label="How we work">How we work</Link></li>
            <li><Link href="#" aria-label="Who will work on your project">Who will work on your project</Link></li>
            <li><Link href="#" aria-label="Our engagement models">Our engagement models</Link></li>
            <li><Link href="#" aria-label="Trusted by happy clients">Trusted by happy clients</Link></li>
          </ul>
        </div>
        <div className="footer-column social-column">
          <p className="cmLabel font-semibold">Social</p>
          <div className="social-icons flex flex-wrap mb-4">
            <Link href="https://www.facebook.com/gameignix/" target="_blank" aria-label="facebook" className="flex items-center justify-center">
              <Image src="/common/facebook.webp" alt="facebook" width={16} height={16} className="max-w-full h-auto flex-shrink-0" />
            </Link>
            <Link href="https://www.linkedin.com/company/gameignix" target="_blank" aria-label="linkedin" className="flex items-center justify-center">
              <Image src="/common/linkedin.webp" alt="linkedin" width={16} height={16} className="max-w-full h-auto flex-shrink-0" />
            </Link>
            <Link href="https://www.instagram.com/gameignix/" target="_blank" aria-label="instagram" className="flex items-center justify-center">
              <Image src="/common/instagram.webp" alt="instagram" width={16} height={16} className="max-w-full h-auto flex-shrink-0" />
            </Link>
            <Link href="https://x.com/gameignix" target="_blank" aria-label="twitter" className="flex items-center justify-center">
              <Image src="/common/twitter.webp" alt="twitter" width={16} height={16} className="max-w-full h-auto flex-shrink-0" />
            </Link>
            <Link href="https://www.pinterest.com/gameignix/" target="_blank" aria-label="pinterest" className="flex items-center justify-center">
              <Image src="/common/pinterest.webp" alt="pinterest" width={16} height={16} className="max-w-full h-auto flex-shrink-0" />
            </Link>
            <Link href="https://www.youtube.com/@gameignix" target="_blank" aria-label="youtube" className="flex items-center justify-center">
              <Image src="/common/youtube.webp" alt="youtube" width={16} height={16} className="max-w-full h-auto flex-shrink-0" />
            </Link>
          </div>
          <label className="cmLabel font-semibold" htmlFor="language-drop">Language</label>
          <select className="language-dropdown" id="language-drop">
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 GameIgnix. All Rights Reserved.</p>
        <Link href="#" aria-label="Terms of service">Terms of service</Link>
        <Link href="#" aria-label="Privacy policy">Privacy policy</Link>
        <Link href="tel:+91 93603 02009" className="text-white">+91 93603 02009</Link>
      </div>
    </footer>
  );
}
