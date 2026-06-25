"use client";
import Contact from "@/components/Contact";

export default function ContactPageServer() {

  return (
    <>

    <main className="gradientsc mt-12 pt-12">     
      
    <section className="contactsc" id="footer">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">Contact Us</h2>
          <p className="lead text-gray-400">
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