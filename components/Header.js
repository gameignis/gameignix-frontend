"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navTop, setNavTop] = useState("0px");
    const [prevScroll, setPrevScroll] = useState(0);
    const [hambOpen, setHambOpen] = useState(false);
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

    const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

    window.scrollTo({
        top,
        behavior: "smooth",
    });

    closeMobileMenu();
    };

    return (
        <nav className={`tpnav w-full z-[1000] transition-all duration-500 ${scrolled ? "fixed" : ""}`} style={{ top: navTop }}>
            <div className="flex items-center justify-between px-4 py-2 lg:px-10">
                <Link href="/" onClick={closeMobileMenu}>
                    <Image src="/common/logo.webp" alt="logo" width={170} height={63} className="max-h-[50px] object-contain" loading="lazy" />
                </Link>

                <button type="button" aria-controls="mobile-navigation" 
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} 
                aria-expanded={menuOpen} 
                className={`lg:hidden flex flex-col justify-center w-10 items-center h-[34px] ${hambOpen ? "" : "hamb-open"}`}
                onClick={() => { setMenuOpen(!menuOpen); setHambOpen(!hambOpen); }}>
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${ menuOpen ? "rotate-45 translate-y-[6px]" : "" }`} />
                    <span className={`block w-6 h-[2px] bg-white my-1 transition-all duration-300 ${ menuOpen ? "opacity-0" : "" }`} />
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${ menuOpen ? "-rotate-45 -translate-y-[6px]" : "" }`} />                  
                </button>

                <div id="mobile-navigation" className={`navbar-menu flex flex-col lg:flex-row transition-all duration-300 ${menuOpen ? "active" : ""} `}>
                    <ul className="tp-navmn flex flex-col lg:flex-row mx-auto items-start lg:items-center">
                        <li className="nav-lis p-4 lg:p-0">
                            <Link className="nav-listin font-semibold" href="#about-us" onClick={(e) => handleSmoothScroll(e, "#about-us")}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-lis dropdown relative p-4 lg:p-0">
                            <button onClick={openServiceMenu} className="nav-listin font-semibold dropdown-toggle flex items-center gap-2">
                                SERVICES
                                <span className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}>
                                    ▼
                                </span>
                            </button>
                            {serviceOpen && (
                                <ul className="dropdown-menu mega-menu lg:absolute lg:top-full w-full flex flex-col lg:flex-row gap-2" >
                                    <div className="col lg:w-1/2 space-y-2">
                                        <li>
                                            <Link className="nav-droplink" aria-label="Game Development Services" href="/services" onClick={closeMobileMenu}>
                                             Game Development Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Game Art Services" href="/game-art-services" onClick={closeMobileMenu}>
                                             Game Art Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Web3 Game Development" href="/services/web3-game-development" onClick={closeMobileMenu}>
                                             Web3 Game Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Slot Game Development" href="/services/slot-game-development" onClick={closeMobileMenu}>
                                             Slot Game Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Unity Game Development" href="/services/unity-game-development" onClick={closeMobileMenu}>
                                             Unity Game Development
                                            </Link>
                                        </li>
                                    </div>
                                    <div className="col lg:w-1/2 space-y-2">
                                        <li>
                                            <Link className="nav-droplink" aria-label="Mobile Game Development" href="/services/mobile-game-development" onClick={closeMobileMenu}>
                                             Mobile Game Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Casino Game Development" href="/services/casino-game-development" onClick={closeMobileMenu}>
                                             Casino Game Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Unreal Engine Game Development" href="/services/unreal-engine-game-development" onClick={closeMobileMenu}>
                                             Unreal Engine Game Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Blockchain Game Development" href="/services/blockchain-game-development" onClick={closeMobileMenu}>
                                              Blockchain Game Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-droplink" aria-label="Poker Game Development" href="/services/poker-game-development" onClick={closeMobileMenu}>
                                              Poker Game Development
                                            </Link>
                                        </li>
                                    </div>
                                </ul>
                            )}
                        </li>
                        <li className="nav-lis p-4 lg:p-0">
                            <Link className="nav-listin font-semibold" href="#case-study" onClick={(e) => handleSmoothScroll(e, "#case-study")}>
                                CASE STUDIES
                            </Link>
                        </li>
                        <li className="nav-lis p-4 lg:p-0">
                            <Link className="nav-listin font-semibold" href="#portfolio" onClick={(e) => handleSmoothScroll(e, "#portfolio")}>
                                PORTFOLIO
                            </Link>
                        </li>
                    </ul>
                    <div className="flex lg:justify-end">
                        <Link className="cm-btn1 uppercase" href="/contact" aria-label="Contact Us" onClick={closeMobileMenu}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
