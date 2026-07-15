"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navTop, setNavTop] = useState("0px");
    const [prevScroll, setPrevScroll] = useState(0);
    const [hambOpen, setHambOpen] = useState(false);

    const navRef = useRef(null);
    useEffect(() => {
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
        setServiceOpen(false); 
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) {
                setScrolled(true);
                setNavTop("0px");
                return;
            }
            const current = window.scrollY;
            if (current > 50) {
                setScrolled(true);
                if (current < prevScroll) {
                    setNavTop("0px");
                } else {
                    setNavTop("-80px");
                }
            } else {
                setScrolled(false);
                setNavTop("0px");
            }
            setPrevScroll(current);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScroll, menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("offcanvas-open");
        } else {
            document.body.classList.remove("offcanvas-open");
        }
    }, [menuOpen]);

    const closeMobileMenu = () => {
    if (window.innerWidth <= 991) {
        setMenuOpen(false);
        setServiceOpen(false);
    }
    setServiceOpen(false);
    };

    const openServiceMenu = () => {
    if (window.innerWidth <= 991) {
        setMenuOpen(true);
        setHambOpen(false); 
    }
    setServiceOpen(prev => !prev);
    };

    const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    const offset = 50;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
        top,
        behavior: "smooth",
    });
    closeMobileMenu();
    };

    useEffect(() => {
      const updateBodyOverflow = () => {
        if (window.innerWidth <= 1023 && menuOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }
      };
      updateBodyOverflow();
      window.addEventListener("resize", updateBodyOverflow);
      return () => {
        window.removeEventListener("resize", updateBodyOverflow);
        document.body.style.overflow = "";
      };
    }, [menuOpen]);

    const navItemClass = `relative max-lg:block max-lg:w-full max-lg:m-0 max-lg:border-b max-lg:border-[#3d3c44] max-lg:py-[10px] lg:p-0`;
    const navLinkClass = `relative inline-block text-white text-[16px] font-semibold mx-[11px] p-2 focus:outline-none focus-visible:outline-none focus-visible:ring-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out hover:before:w-full max-lg:w-auto`;
    const dropdownBtnClass = `relative cursor-pointer flex items-center text-white text-[16px] font-semibold mx-[11px] p-2 before:w-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 max-lg:w-[93%] max-lg:text-left`;
    console.log("Scrolled:", scrolled);

    return (
        <nav style={{ top: navTop }} className={`fixed left-0 top-0 z-[1000] w-full md:max-lg:w-[98%] px-[10px] py-[4px] transition-all duration-500 ease-in-out max-lg:px-0 max-lg:py-[8px] max-lg:h-[68px] ${ scrolled ? "bg-black shadow-[0_0_20px_#000] max-lg:border-b max-lg:border-[#3d3c44]" : "bg-transparent" } `}>
            <div className="flex items-center justify-between px-4 py-2 lg:px-10">
                <Link href="/" onClick={closeMobileMenu}>
                  <Image src="/common/logo.webp" alt="logo" width={170} height={63} className="max-h-[50px] object-contain" loading="lazy" />
                </Link>
                <button type="button" aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} className={`lg:hidden flex flex-col justify-center w-10 items-center h-[34px] ${hambOpen ? "" : "hamb-open"}`} onClick={() => { setMenuOpen(!menuOpen); setHambOpen(!hambOpen); }}>
                  <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${ menuOpen ? "rotate-45 translate-y-[6px]" : "" }`} />
                  <span className={`block w-6 h-[2px] bg-white my-1 transition-all duration-300 ${ menuOpen ? "opacity-0" : "" }`} />
                  <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${ menuOpen ? "-rotate-45 -translate-y-[6px]" : "" }`} />                  
                </button>                
                <div id="mobile-navigation" className={`fixed lg:static top-[69px] lg:top-auto right-0 w-full lg:w-auto h-[calc(100vh-69px)] lg:h-auto bg-black lg:bg-transparent z-[1050] overflow-y-auto lg:overflow-visible px-[10px] lg:px-0 flex flex-col justify-between pb-10 md:pb-0 lg:flex-row lg:flex-grow lg:basis-auto lg:items-center transition-transform duration-300 ease-in-out ${menuOpen ? " translate-x-0" : " translate-x-full"} lg:translate-x-0 ${scrolled ? ` max-lg:before:content-[''] max-lg:before:absolute max-lg:before:right-[10px] max-lg:before:top-0 max-lg:before:w-px max-lg:before:h-full max-lg:before:bg-[#3d3c44] max-lg:after:content-[''] max-lg:after:absolute max-lg:after:left-[10px] max-lg:after:top-0 max-lg:after:w-px max-lg:after:h-full max-lg:after:bg-[#3d3c44]` : ""} `}>                
                    <ul className="flex flex-col lg:flex-row mx-auto items-start lg:items-center max-lg:w-full max-lg:px-[14px]">                      
                      <li className={navItemClass}>
                        <Link className={navLinkClass} href="#about-us" onClick={(e) => handleSmoothScroll(e, "#about-us")}>
                            ABOUT US
                        </Link>
                      </li>                      
                      <li ref={navRef} className={`${navItemClass} dropdown relative`}>
                        <button onClick={openServiceMenu} className={dropdownBtnClass}> 
                          SERVICES
                          <span className={`transition-transform text-[10px] ml-2 ${serviceOpen ? "rotate-180" : ""}`}> ▼ </span>
                        </button>
                        {serviceOpen && (
                          <div className={`p-[8.5px] w-full flex flex-col lg:flex-row gap-2 lg:absolute lg:top-full bg-[rgba(26,26,26,0.95)] border-t-4 border-[#FC7400] rounded-none shadow-[2px_4px_4px_rgba(252,116,0,0.1)] text-white lg:w-[650px] lg:left-1/2 lg:-translate-x-[36%]`}>
                            <ul className="col lg:w-1/2 space-y-1">
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Game Development Services" href="/services" onClick={closeMobileMenu}>
                                        Game Development Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Game Art Services" href="/game-art-services" onClick={closeMobileMenu}>
                                        Game Art Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Web3 Game Development" href="/services/web3-game-development" onClick={closeMobileMenu}>
                                        Web3 Game Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Slot Game Development" href="/services/slot-game-development" onClick={closeMobileMenu}>
                                        Slot Game Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Unity Game Development" href="/services/unity-game-development" onClick={closeMobileMenu}>
                                        Unity Game Development
                                    </Link>
                                </li>
                            </ul>
                            <ul className="col lg:w-1/2 space-y-1">
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Mobile Game Development" href="/services/mobile-game-development" onClick={closeMobileMenu}>
                                        Mobile Game Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Casino Game Development" href="/services/casino-game-development" onClick={closeMobileMenu}>
                                        Casino Game Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Unreal Engine Game Development" href="/services/unreal-engine-game-development" onClick={closeMobileMenu}>
                                        Unreal Engine Game Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Blockchain Game Development" href="/services/blockchain-game-development" onClick={closeMobileMenu}>
                                        Blockchain Game Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block w-full my-1 py-1 px-4 text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#ff8600] hover:bg-white/10 focus:text-[#ff8600] focus:bg-white/10" aria-label="Poker Game Development" href="/services/poker-game-development" onClick={closeMobileMenu}>
                                        Poker Game Development
                                    </Link>
                                </li>
                            </ul>
                         </div>
                        )}
                      </li>
                      <li className={navItemClass}>
                        <Link className={navLinkClass} href="#case-study" onClick={(e) => handleSmoothScroll(e, "#case-study")}>
                          CASE STUDIES
                        </Link>
                      </li>                      
                      <li className={navItemClass}>
                        <Link className={navLinkClass} href="#portfolio" onClick={(e) => handleSmoothScroll(e, "#portfolio")}>
                          PORTFOLIO
                        </Link>
                      </li>
                    </ul>
                    <div className="flex justify-center lg:justify-end mt-10 md:mt-0">
                      <Link href="/contact" aria-label="Contact Us" onClick={closeMobileMenu} className="inline-block p-[1px] bg-[#F57C00] text-[16px] uppercase transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[6px] md:[&>span]:py-[2px] [&>span]:bg-[#F57C00] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]">
                        <span>Contact Us</span>
                      </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}