"use client";
import Contact from "@/components/Contact";

export default function ContactPageServer() {

  return (
    <>

    <main className="gradientsc mt-12 pt-12">     
      
      <section className="py-[2rem]" id="footer">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
            <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Dreaming of your next big game? Fill out the form to request a tailored quote and let our skilled team provide the best solution 
              for your needs with precision and creativity.
            </p>
          </div>        
        <Contact />    
        </div>
      </section>

    </main>

    </>
  );
}