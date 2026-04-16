"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Gauge, Calendar, Fuel, Zap, PhoneCall, 
  CheckCircle2, Ship, ChevronRight, ShieldAlert, 
  PlayCircle, Camera, X, ChevronLeft, Tag, MapPin
} from 'lucide-react';

export default function CamryListingPage() {
  const whatsappNumber = "+2348105105757";
  const carTitle = "Toyota Camry 2013 SE";
  const price = "₦16,000,000";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=I%20am%20interested%20in%20the%20${encodeURIComponent(carTitle)}%20for%20${price}`;

  const images = [
    "/camry2013se (1).jpg",
    "/camry2013se (2).jpg",
    "/camry2013se (3).jpg"
  ];

  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImg !== null) setSelectedImg((selectedImg + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImg !== null) setSelectedImg((selectedImg - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Lightbox / Full Screen Swiper */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={32} />
            </button>
            <button onClick={prevImg} className="absolute left-4 text-white p-4 hover:bg-white/10 rounded-full transition-colors">
              <ChevronLeft size={40} />
            </button>
            <motion.img 
              key={selectedImg}
              initial={{ scale: 0.9, x: 50 }} animate={{ scale: 1, x: 0 }} exit={{ scale: 0.9, x: -50 }}
              src={images[selectedImg]} 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <button onClick={nextImg} className="absolute right-4 text-white p-4 hover:bg-white/10 rounded-full transition-colors">
              <ChevronRight size={40} />
            </button>
            <div className="absolute bottom-10 text-white font-bold tracking-widest uppercase text-sm">
              {selectedImg + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Header */}
      <div className="bg-blue-700 text-white py-2 px-4 text-center text-[10px] md:text-xs font-black tracking-widest uppercase sticky top-0 z-50 shadow-md">
        <span className="flex items-center justify-center gap-2">
          <Ship size={14} /> USA DIRECT IMPORT | NATIONWIDE DELIVERY AVAILABLE
        </span>
      </div>

      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="px-4 py-1.5 text-[10px] font-bold bg-blue-50 text-blue-700 rounded-full border border-blue-100 uppercase tracking-widest">
                Sport Edition (SE)
              </div>
              <div className="px-4 py-1.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 uppercase tracking-widest flex items-center gap-1">
                <Tag size={12} /> For Sale
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-none text-slate-900">
              TOYOTA <br/><span className="text-blue-600 uppercase tracking-tighter">Camry 2013</span>
            </h1>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                {price}
              </span>
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest italic">Lagos Cleared</span>
            </div>

            <p className="text-slate-500 text-lg md:text-xl mb-8 leading-relaxed">
              Clean <b>USA Spec</b> Sport Edition. Shipped directly from the USA and cleared in Lagos. 
              Available for immediate inspection and pickup across our major hubs.
            </p>
            
            <a href={whatsappLink} className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              <PhoneCall size={20} /> CHAT WITH DEALER
            </a>
          </div>

          <div className="relative">
            <div className="aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white ring-1 ring-slate-100">
               <video autoPlay muted loop controls className="w-full h-full object-cover">
                 <source src="/camry2013se.mp4" type="video/mp4" />
               </video>
            </div>
          </div>
        </div>
      </header>

      {/* Specs & Gallery */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
          <SpecCard icon={<Calendar size={20}/>} label="Year" value="2013" />
          <SpecCard icon={<Zap size={20}/>} label="Trim" value="SE Sport" />
          <SpecCard icon={<Fuel size={20}/>} label="Spec" value="USA" />
          <SpecCard icon={<MapPin size={20}/>} label="Availability" value="Nationwide" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImg(index)}
              className="aspect-square bg-slate-200 rounded-3xl overflow-hidden border-4 border-white shadow-lg cursor-pointer relative group"
            >
              <img src={img} className="w-full h-full object-cover" alt="Car Gallery" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Camera size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-950 p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-900">
          <div>
            <h2 className="text-3xl font-black mb-2 tracking-tight">Price: {price}</h2>
            <p className="text-blue-200 font-medium tracking-wide flex items-center gap-2">
              <CheckCircle2 size={16} /> Original Duty Fully Paid
            </p>
          </div>
          <a href={whatsappLink} className="bg-blue-500 hover:bg-white hover:text-blue-950 px-12 py-5 rounded-full font-black transition-all flex items-center gap-2 shadow-lg">
            INQUIRE NOW <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Multi-Site Inspection Footer */}
      <footer className="pb-20 px-6 max-w-4xl mx-auto">
         <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <h3 className="text-2xl font-black mb-6">Inspection & Viewing</h3>
            <div className="space-y-4 mb-10 text-slate-700">
               <FeatureItem text="Lagos Island & Mainland Hubs" />
               <FeatureItem text="Benin City Central Viewing Site" />
               <FeatureItem text="Abuja FCT Showroom" />
               <FeatureItem text="Original USA Title & Customs Papers" />
            </div>
            
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
               <ShieldAlert className="text-red-600 shrink-0" />
               <p className="text-xs text-red-900 font-bold uppercase tracking-tight leading-relaxed">
                  Security Note: Physical inspection is mandatory before payment. 
                  Visit our site in Lagos, Benin City, and Abuja for viewing.
               </p>
            </div>
         </div>
         <div className="mt-12 text-center">
            <div className="text-slate-900 font-black text-2xl mb-2 flex items-center justify-center gap-2">
                VERIFIED<span className="text-blue-600">AUTO</span>
            </div>
            <p className="text-slate-400 text-[10px] font-bold tracking-[0.4em] uppercase">
              {/* Updated Branding Below */}
              © {new Date().getFullYear()} Managed by AVH Consult
            </p>
         </div>
      </footer>
    </div>
  );
}

function SpecCard({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
      <div className="text-blue-600 flex justify-center mb-2">{icon}</div>
      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{label}</p>
      <p className="text-slate-900 font-black text-lg tracking-tighter">{value}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 font-bold text-sm">
      <CheckCircle2 size={18} className="text-blue-500" /> {text}
    </div>
  );
}