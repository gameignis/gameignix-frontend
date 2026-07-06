"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-white/5 p-5 mt-8">
      <div className="max-w-[1336px] mx-auto flex flex-wrap justify-between border-b border-[#333] pb-[30px]">
        <div className="flex-1 min-w-[200px] m-[5px] md:m-0">
          <Link className="inline-block mb-[10px] md:mb-4" href="/" aria-label="GameIgnix">
            <Image src="/common/logo.webp" alt="gameignix logo" width={170} height={170} className="w-[140px] md:w-[170px] h-auto" />
          </Link>
          <p className="font-bold text-white text-[17px] leading-[1.5] mt-[2px] mb-2">Featured on</p>
          <ul className="list-none mb-4">
            <li className="w-full">
              <Link href="https://clutch.co/profile/gameignix" target="_blank" aria-label="Gameignix Featured On Clutch" className="inline-block border-b border-dashed border-white py-[5px] min-w-[80%] md:min-w-[200px]">
                <Image src="/common/logo/clutch.webp" alt="Gameignix Featured On Clutch" width={130} height={28} className="object-contain w-[100px] md:w-[130px] h-[20px] md:h-[28px] relative left-[-26px] md:left-[-30px]" />
              </Link>
            </li>
            <li className="w-full mb-[3px] md:mb-[5px]">
              <Link href="https://www.designrush.com/" target="_blank" aria-label="Gameignix Featured On Designrush" className="inline-block border-b border-dashed border-white py-[5px] min-w-[80%] md:min-w-[200px]">
                <Image src="/common/logo/designrush.webp" alt="Gameignix Featured On Designrush" width={130} height={32} className="object-contain w-[100px] md:w-[130px] h-auto" />
              </Link>
            </li>
            <li className="w-full">
              <Link href="https://www.goodfirms.co/company/gameignix" target="_blank" aria-label="Gameignix Featured On Goodfirms" className="inline-block border-b border-dashed border-white py-[5px] min-w-[80%] md:min-w-[200px]">
                <Image src="/common/logo/goodfirms.webp" alt="Gameignix Featured On Goodfirms" width={130} height={32} className="object-contain w-[100px] md:w-[130px] h-auto" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] m-[5px] md:m-5">
          <ul className="list-none p-0 mb-4">
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="About us">About us</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="services" target="_blank" aria-label="Service">Service</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Our Game portfolio">Our Game portfolio</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Case study">Case study</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Development Agency">Development Agency</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Banner">Banner</Link></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] m-[5px] md:m-5">
          <ul className="mb-4">
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Tools and Technology">Tools and Technology</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Engines">Engines</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="How we work">How we work</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Who will work on your project">Who will work on your project</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Our engagement models">Our engagement models</Link></li>
            <li className="mb-[3px] md:mb-[10px]"><Link className="text-white text-[14px] lg:text-[16px] hover:text-[#ff6d00] transition-colors" href="#" aria-label="Trusted by happy clients">Trusted by happy clients</Link></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] m-[5px] md:m-5">
          <p className="text-white text-[17px] font-bold mb-2">Social</p>
          <div className="flex flex-wrap mb-6">
            <Link href="https://www.facebook.com/gameignix/" target="_blank" aria-label="facebook" className="mr-[2px] md:mr-1 mb-1 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 hover:text-[#ff6d00] transition-colors">
              <Image src="/common/facebook.webp" alt="facebook" width={16} height={16} className="w-4 h-4 object-contain" />
            </Link>
            <Link href="https://www.linkedin.com/company/gameignix" target="_blank" aria-label="linkedin" className="mr-[2px] md:mr-1 mb-1 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 hover:text-[#ff6d00] transition-colors">
              <Image src="/common/linkedin.webp" alt="linkedin" width={16} height={16} className="w-4 h-4 object-contain" />
            </Link>
            <Link href="https://www.instagram.com/gameignix/" target="_blank" aria-label="instagram" className="mr-[2px] md:mr-1 mb-1 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 hover:text-[#ff6d00] transition-colors">
              <Image src="/common/instagram.webp" alt="instagram" width={16} height={16} className="w-4 h-4 object-contain" />
            </Link>
            <Link href="https://x.com/gameignix" target="_blank" aria-label="twitter" className="mr-[2px] md:mr-1 mb-1 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 hover:text-[#ff6d00] transition-colors">
              <Image src="/common/twitter.webp" alt="twitter" width={16} height={16} className="w-4 h-4 object-contain" />
            </Link>
            <Link href="https://www.pinterest.com/gameignix/" target="_blank" aria-label="pinterest" className="mr-[2px] md:mr-1 mb-1 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 hover:text-[#ff6d00] transition-colors">
              <Image src="/common/pinterest.webp" alt="pinterest" width={16} height={16} className="w-4 h-4 object-contain" />
            </Link>
            <Link href="https://www.youtube.com/@gameignix" target="_blank" aria-label="youtube" className="mr-[2px] md:mr-1 mb-1 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 hover:text-[#ff6d00] transition-colors">
              <Image src="/common/youtube.webp" alt="youtube" width={16} height={16} className="w-4 h-4 object-contain" />
            </Link>
          </div>
          <label htmlFor="language-drop" className="inline-block me-2 text-[15px] md:text-[16px] text-white font-semibold mb-2">Language</label>
          <select id="language-drop" className="bg-[#222] border border-[#444] rounded-[5px] px-[10px] text-[14px] md:text-[16px] py-[6px] text-white">
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[15px] md:gap-24 pt-[25px] pb-4 text-[13px] md:text-[16px] text-white">
        <p className="w-full text-[14px] lg:text-[16px] lg:w-auto text-center">Copyright © 2026 GameIgnix. All Rights Reserved.</p>
        <Link href="#" aria-label="Terms of service" className="hover:text-[#ff6d00] text-[14px] lg:text-[16px] transition-colors">Terms of service</Link>
        <Link href="#" aria-label="Privacy policy" className="hover:text-[#ff6d00] text-[14px] lg:text-[16px] transition-colors">Privacy policy</Link>
        <Link href="tel:+91 93603 02009" className="hover:text-[#ff6d00] text-[14px] lg:text-[16px] transition-colors">+91 93603 02009</Link>
      </div>
    </footer>
  );
}
