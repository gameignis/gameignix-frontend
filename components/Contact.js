"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ApiError, apiRequest } from "@/lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    messengerId: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    if (alert.type !== "success" || !alert.message) return undefined;
    const timer = setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: "", message: "" });
    setErrors({});

    try {
      await apiRequest("/api/contacts", {
        method: "POST",
        body: formData,
      });
      setAlert({
        type: "success",
        message: "Thanks for contacting us. Our team will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        messengerId: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof ApiError && error.payload && typeof error.payload === "object") {
        const payload = error.payload;
        if (payload && "errors" in payload) {
          setErrors(payload.errors || {});
        }
      }
      setAlert({
        type: "error",
        message: "Unable to submit your message now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentUrl = useCallback(() => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  }, []);
  const pathname = usePathname();
  const [whatsLink, setWhatsLink] = useState("#");
  useEffect(() => {
      const whatsappNumber = "919360302009";
      const message = "Hi, I am interested in this service. Here is the page link: ";
      const fullURL = getCurrentUrl();
      const finalURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `${message}${fullURL}`
      )}`;
    setWhatsLink(finalURL);
    }, [pathname]);    

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="w-full md:col-span-7">
            <div className="rounded-lg border border-[#333] bg-[#161313] p-6">
              <h2 className="uppercase text-left mb-4 text-[22px] leading-[32px] lg:text-[30px] lg:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="w-full md:col-span-6">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" aria-label="Name">Name</label>
                    <input type="text" className="w-full text-[14px] lg:text-[16px] rounded-md border border-transparent bg-[#281f17] p-2 h-[50px] text-white placeholder:text-[#aaa] transition focus:border-[#c57111] focus:outline-none focus:ring-0" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name ? <p className="text-red-400 text-sm mt-1">{errors.name}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" aria-label="Email">Email</label>
                    <input type="email" className="w-full text-[14px] lg:text-[16px] rounded-md border border-transparent bg-[#281f17] p-2 h-[50px] text-white placeholder:text-[#aaa] transition focus:border-[#c57111] focus:outline-none focus:ring-0" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email ? <p className="text-red-400 text-sm mt-1">{errors.email}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" aria-label="Country">Country</label>
                    <input type="text" className="w-full text-[14px] lg:text-[16px] rounded-md border border-transparent bg-[#281f17] p-2 h-[50px] text-white placeholder:text-[#aaa] transition focus:border-[#c57111] focus:outline-none focus:ring-0" placeholder="Enter your country name" name="country" value={formData.country} onChange={handleChange} required />
                    {errors.country ? <p className="text-red-400 text-sm mt-1">{errors.country}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" aria-label="Phone No">Phone No</label>
                    <input type="text" className="w-full text-[14px] lg:text-[16px] rounded-md border border-transparent bg-[#281f17] p-2 h-[50px] text-white placeholder:text-[#aaa] transition focus:border-[#c57111] focus:outline-none focus:ring-0" placeholder="Enter your phone no" name="phone" value={formData.phone} onChange={handleChange} required />
                    {errors.phone ? <p className="text-red-400 text-sm mt-1">{errors.phone}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" aria-label="WhatsApp/Telegram/Teams">WhatsApp/Telegram/Teams</label>
                    <input type="text" className="w-full text-[14px] lg:text-[16px] rounded-md border border-transparent bg-[#281f17] p-2 h-[50px] text-white placeholder:text-[#aaa] transition focus:border-[#c57111] focus:outline-none focus:ring-0" placeholder="Enter your Id" aria-label="WhatsApp/Telegram/Teams" name="messengerId" value={formData.messengerId} onChange={handleChange} required />
                    {errors.messengerId ? <p className="text-red-400 text-sm mt-1">{errors.messengerId}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" htmlFor="services-opt">Services</label>
                    <div className="relative w-full">
                      <select className="w-full text-[14px] lg:text-[16px] appearance-none rounded-md border border-transparent bg-[#281f17] p-2 h-[50px] text-[#aaa] font-sans transition focus:border-[#c57111] focus:outline-none focus:ring-0" id="services-opt" name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Enter your Service</option>
                        <option value="custom-game">Custom Game Development</option>
                        <option value="game-art">Game Art and Designing</option>
                        <option value="web3-game">Web3 Game Development</option>
                        <option value="slot-game">Slot Game Development</option>
                        <option value="unity-game">Unity Game Development</option>
                        <option value="mobile-game">Mobile Game Development</option>
                        <option value="casino-game">Casino Game Development</option>
                        <option value="unreal-engine">Unreal Engine Game Development</option>
                        <option value="blockchain-game">Blockchain Game Development</option>
                        <option value="poker-game">Poker Game Development</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.service ? <p className="text-red-400 text-sm mt-1">{errors.service}</p> : null}
                  </div>
                  <div className="w-full md:col-span-12">
                    <label className="text-[14px] lg:text-[16px] block mb-2 font-medium text-white" aria-label="Message">Message</label>
                    <textarea className="w-full text-[14px] lg:text-[16px] rounded-md border border-transparent bg-[#281f17] p-2 h-[150px] resize-none text-white placeholder:text-[#aaa] transition focus:border-[#c57111] focus:outline-none focus:ring-0" rows={4} name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your gaming goals and how we can help you..."></textarea>
                    {errors.message ? <p className="text-red-400 text-sm mt-1">{errors.message}</p> : null}
                  </div>
                  <div className="w-full md:col-span-12 mt-2 text-center">
                    <button type="submit" className="w-full rounded bg-[#F57C00] cursor-pointer px-4 py-2 text-[16px] lg:text-[18px] font-semibold text-white transition-colors hover:bg-[#e77007]" aria-label="Send message" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                    <div id="form-alert" className={`alert mt-3 text-left ${alert.message ? "" : "d-none"} ${alert.type === "error" ? "text-red-400" : "text-green-400"}`}>
                      {alert.message}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="grid gap-3">
              <div className="mb-2 flex rounded-lg border border-[#333] bg-[#161313] p-3 text-white transition-colors hover:border-[#ff8600]">
                <div className="mr-3 mt-[5px] flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                  <Image src="/common/email.webp" alt="email" width={24} height={24} className="max-h-[33px] max-w-[33px] object-contain" loading="lazy" />
                </div>
                <div>
                  <p className="mb-1 font-orbitron text-[16px] lg:text-[18px] font-semibold capitalize text-white">Email support</p>
                  <Link href="mailto:sales@gameignix.com" target="_blank" rel="noopener noreferrer" className="mb-0 text-[#ff8600] text-[14px] lg:text-[15px]">sales@gameignix.com</Link>
                  <p className="text-[14px] lg:text-[15px] text-[#E6E6E6]">General inquiries and support</p>
                </div>
              </div>
              <div className="mb-2 flex rounded-lg border border-[#333] bg-[#161313] p-3 text-white transition-colors hover:border-[#ff8600]">
                <div className="mr-3 mt-[5px] flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                  <Image src="/common/phone.webp" alt="phone" width={24} height={24} className="max-h-[33px] max-w-[33px] object-contain" loading="lazy" />
                </div>
                <div>
                  <p className="mb-1 font-orbitron text-[16px] lg:text-[18px] font-semibold capitalize text-white">Phone Support</p>
                  <Link href="tel:+91 93603 02009" target="_blank" className="mb-0 text-[#ff8600] text-[14px] lg:text-[15px]">+91 93603 02009</Link>
                  <p className="text-[14px] lg:text-[15px] text-[#E6E6E6]">Mon–Fri 9.00AM – 6.30PM IST</p>
                </div>
              </div>
              <div className="mb-2 flex rounded-lg border border-[#333] bg-[#161313] p-3 text-white transition-colors hover:border-[#ff8600]">
                <div className="mr-3 mt-[5px] flex h-[60px] flex-shrink-0 w-[60px] items-center justify-center rounded-[10px] bg-white/10">
                  <Image src="/common/location.webp" alt="location" width={24} height={24} className="max-h-[33px] max-w-[33px] object-contain" loading="lazy" />
                </div>
                <div>
                  <p className="mb-1 font-orbitron text-[16px] lg:text-[18px] font-semibold capitalize text-white">Office Location</p>
                  <p className="mb-0 text-[#ff8600] text-[14px] lg:text-[15px]">Tamil Nadu, India</p>
                  <p className="text-[14px] lg:text-[15px] text-[#E6E6E6]">
                    C-18 First Floor, Chockanathar Street,<br />
                    Thirunagar 4th Stop, Madurai - 625006.
                  </p>
                  <p className="mt-2 mb-1 font-orbitron text-[16px] lg:text-[18px] font-semibold capitalize text-white">Sales Office</p>
                  <p className="text-[14px] lg:text-[15px] text-[#E6E6E6]">
                    Flat - 303, Building no: 11, Shabiya 11, Mussafah,<br />
                    Abu Dhabi, UAE.
                  </p>
                </div>
              </div>
              <div className="mb-2 flex rounded-lg border border-[#333] bg-[#161313] p-3 text-white transition-colors hover:border-[#ff8600]">
                <div className="mr-3 mt-[5px] flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                  <Image src="/common/community.webp" alt="Telegram community" width={24} height={24} className="max-h-[33px] max-w-[33px] object-contain" loading="lazy" />
                </div>
                <div>
                  <p className="mb-1 font-orbitron text-[16px] lg:text-[18px] font-semibold capitalize text-white">Telegram Community</p>
                  <Link className="mb-0 text-[#ff8600] text-[14px] lg:text-[15px] underline" href="https://t.me/gameignixofficial" target="_blank" rel="noopener noreferrer">t.me/gameignixofficial</Link>
                  <p className="text-[14px] lg:text-[15px] text-[#E6E6E6]">24/7 Community Support</p>
                </div>
              </div>
              <p className="mt-[3px] mb-2 text-[20px] lg:text-[24px] font-semibold text-white">Quick Contact</p>
              <div className="flex gap-2">
                <Link href={whatsLink} target="_blank" className="group relative inline-flex w-1/2 min-h-[40px] items-center justify-center overflow-hidden rounded-md bg-[#CC0000] px-4 pt-3 pb-2 text-[14px] lg:text-[18px] leading-[26px] font-semibold text-white transition-colors duration-300 hover:bg-[#1F8A00]" rel="noopener noreferrer" aria-label="whatsapp">
                  <span className="absolute left-0 flex w-full items-center justify-center gap-1 lg:gap-2 whitespace-nowrap opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <Image src="/common/whatsapp.webp" alt="whatsapp" width={24} height={24} loading="lazy" /> WhatsApp Us
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image src="/common/whatsapp.webp" alt="whatsapp" width={24} height={24} loading="lazy" /> +91 93603 02009
                  </span>
                </Link>
                <Link className="group relative inline-flex w-1/2 min-h-[40px] items-center justify-center overflow-hidden rounded-md bg-[#B85E00] px-4 py-[10px] text-[14px] lg:text-[18px] leading-[26px] font-semibold transition-colors duration-300 text-white hover:bg-[#1c87c9]" href="https://telegram.me/gameignix" rel="noopener noreferrer" aria-label="telegram" target="_blank">
                  <span className="absolute left-0 flex w-full items-center justify-center gap-1 lg:gap-2 whitespace-nowrap opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <Image src="/common/telegram.webp" alt="telegram" width={24} height={24} loading="lazy" /> Telegram Us
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center gap-1 lg:gap-2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image src="/common/telegram.webp" alt="telegram" width={24} height={24} loading="lazy" /> @gameignix
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
