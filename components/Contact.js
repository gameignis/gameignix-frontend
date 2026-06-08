"use client";

import { useEffect, useState } from "react";
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="w-full md:col-span-7">
            <div className="p-6 rounded-lg contact-form">
              <p className="font-bold mb-3 cm-hd1 text-white">Send us a Message</p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="w-full md:col-span-6">
                    <label className="cmLabel block mb-2 font-medium text-white" aria-label="Name">Name</label>
                    <input type="text" className="cmInpbx border rounded-md p-2 w-full contact-input"
                      placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name ? <p className="text-red-400 text-sm mt-1">{errors.name}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="cmLabel block mb-2 font-medium text-white" aria-label="Email">Email</label>
                    <input type="email" className="cmInpbx border rounded-md p-2 w-full contact-input"
                      placeholder="Enter your Email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email ? <p className="text-red-400 text-sm mt-1">{errors.email}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="cmLabel block mb-2 font-medium text-white" aria-label="Country">Country</label>
                    <input type="text" className="cmInpbx border rounded-md p-2 w-full contact-input"
                      placeholder="Enter your country name" name="country" value={formData.country} onChange={handleChange} required />
                    {errors.country ? <p className="text-red-400 text-sm mt-1">{errors.country}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="cmLabel block mb-2 font-medium text-white" aria-label="Phone No">Phone No</label>
                    <input type="text" className="cmInpbx border rounded-md p-2 w-full contact-input"
                      placeholder="Enter your phone no" name="phone" value={formData.phone} onChange={handleChange} required />
                    {errors.phone ? <p className="text-red-400 text-sm mt-1">{errors.phone}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="cmLabel block mb-2 font-medium text-white" aria-label="WhatsApp/Telegram/Teams">WhatsApp/Telegram/Teams</label>
                    <input type="text" className="cmInpbx border rounded-md p-2 w-full contact-input"
                      placeholder="Enter your Id" aria-label="WhatsApp/Telegram/Teams" name="messengerId" value={formData.messengerId} onChange={handleChange} required />
                    {errors.messengerId ? <p className="text-red-400 text-sm mt-1">{errors.messengerId}</p> : null}
                  </div>
                  <div className="w-full md:col-span-6">
                    <label className="cmLabel block mb-2 font-medium text-white" htmlFor="services-opt">Services</label>
                    <div className="relative w-full">
                      <select className="cmInpselectbx border rounded-md p-2 w-full contact-input font-sans text-base" id="services-opt" name="service" value={formData.service} onChange={handleChange} required>
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
                    <label className="cmLabel block mb-2 font-medium text-white" aria-label="Message">Message</label>
                    <textarea className="cmInpbx border rounded-md p-2 w-full contact-input" rows={4} name="message" value={formData.message} onChange={handleChange} required
                      placeholder="Tell us about your gaming goals and how we can help you..."></textarea>
                    {errors.message ? <p className="text-red-400 text-sm mt-1">{errors.message}</p> : null}
                  </div>
                  <div className="w-full md:col-span-12 mt-2 text-center">
                    <button type="submit" className="w-full prim-btn font-semibold py-2 px-4 rounded" aria-label="Send message" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                    <div
                      id="form-alert"
                      className={`alert mt-3 text-left ${alert.message ? "" : "d-none"} ${alert.type === "error" ? "text-red-400" : "text-green-400"}`}
                    >
                      {alert.message}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="grid gap-3">
              <div className="contact-box flex align-start p-3 rounded">
                <div className="icon-box flex items-center justify-center mr-3">
                  <Image src="/common/email.webp" alt="email" width={24} height={24} className="max-w-full h-auto flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 contac-thd">Email support</p>
                  <Link href="mailto:sales@gameignix.com" target="_blank" rel="noopener noreferrer" className="mb-0 text-orange contac-tsup">sales@gameignix.com</Link>
                  <p className="text-gray-400 contac-tsub">General inquiries and support</p>
                </div>
              </div>
              <div className="contact-box flex align-start p-3 rounded">
                <div className="icon-box flex items-center justify-center mr-3">
                  <Image src="/common/phone.webp" alt="phone" width={24} height={24} className="max-w-full h-auto flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 contac-thd">Phone Support</p>
                  <Link href="tel:+91 93603 02009" target="_blank" className="mb-0 text-orange contac-tsup">+91 93603 02009</Link>
                  <p className="text-gray-400 contac-tsub">Mon–Fri 9.00AM – 6.30PM IST</p>
                </div>
              </div>
              <div className="contact-box flex align-start p-3 rounded">
                <div className="icon-box flex items-center justify-center mr-3">
                  <Image src="/common/location.webp" alt="location" width={24} height={24} className="max-w-full h-auto flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 contac-thd">Office Location</p>
                  <p className="mb-0 text-orange contac-tsup">Tamil Nadu, India</p>
                  <p className="text-gray-400 contac-tsub">
                    C-18 First Floor, Chockanathar Street,<br />
                    Thirunagar 4th Stop, Madurai - 625006.
                  </p>
                  <p className="font-semibold text-white mb-1 contac-thd">Sales Office</p>
                  <p className="text-gray-400 contac-tsub">
                    Flat - 303, Building no: 11, Shabiya 11, Mussafah,<br />
                    Abu Dhabi, UAE.
                  </p>
                </div>
              </div>
              <div className="contact-box flex align-start p-3 rounded">
                <div className="icon-box flex items-center justify-center mr-3">
                  <Image src="/common/community.webp" alt="Telegram community" width={24} height={24} className="max-w-full h-auto flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 contac-thd">Telegram Community</p>
                  <Link className="mb-0 text-orange contac-tsup" href="https://t.me/gameignixofficial" target="_blank" rel="noopener noreferrer">t.me/gameignixofficial</Link>
                  <p className="text-gray-400 contac-tsub">24/7 Community Support</p>
                </div>
              </div>
              <p className="font-semibold text-white mb-2 cm-hd2">Quick Contact</p>
              <div className="flex gap-2">
                <Link id="whatsapp-btn" className="whatsapp-btn font-semibold text-white w-1/2" href="#" target="_blank" rel="noopener noreferrer" aria-label="whatsapp">
                  <span className="text default-text flex items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
                    <Image src="/common/whatsapp.webp" alt="whatsapp" width={24} height={24} /> WhatsApp Us
                  </span>
                  <span className="text hover-text flex items-center justify-center gap-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image src="/common/whatsapp.webp" alt="whatsapp" width={24} height={24} /> +91 93603 02009
                  </span>
                </Link>
                <Link className="telegram-btn font-semibold text-white w-1/2" href="https://telegram.me/gameignix" rel="noopener noreferrer" aria-label="telegram" target="_blank">
                  <span className="text default-text flex items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
                    <Image src="/common/telegram.webp" alt="telegram" width={24} height={24} /> Telegram Us
                  </span>
                  <span className="text hover-text flex items-center justify-center gap-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image src="/common/telegram.webp" alt="telegram" width={24} height={24} /> @gameignix
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
