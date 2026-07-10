import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const sectors = [
    { title: "Pingal Prakash", icon: "📰", color: "hover:bg-amber-900/20 hover:border-amber-900" },
    { title: "Narela Corporation", icon: "🏗️", color: "hover:bg-orange-950/20 hover:border-orange-900" },
    { title: "Fabclen Services", icon: "✨", color: "hover:bg-amber-950/20 hover:border-amber-900" },
    { title: "i Sugar", icon: "🍬", color: "hover:bg-red-950/20 hover:border-red-900" },
    { title: "Dharma Events", icon: "🎪", color: "hover:bg-orange-950/20 hover:border-orange-900" },
    { title: "Gujarat Essential Goods", icon: "🌾", color: "hover:bg-emerald-950/20 hover:border-emerald-800" },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans dark:bg-stone-950 dark:text-stone-50 scroll-smooth">
      
      {/* 1. Enhanced Rounded Floating Navbar */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-6">
        <header className="bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-stone-200/90 px-10 h-20 flex items-center justify-between dark:bg-stone-900/90 dark:border-stone-800">
          <div>
            <span className="text-2xl font-black tracking-tight text-stone-950 dark:text-stone-50">
              DHARMA <span className="text-amber-800 font-normal text-base tracking-wide dark:text-amber-600">GROUP</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-10 text-base font-bold text-stone-700 dark:text-stone-300">
            <Link href="#" className="hover:text-amber-800 dark:hover:text-amber-600 transition">Home</Link>
            <Link href="#about" className="hover:text-amber-800 dark:hover:text-amber-600 transition">About Us</Link>
            <Link href="#business" className="hover:text-amber-800 dark:hover:text-amber-600 transition">Our Business</Link>
            <Link href="#contact" className="hover:text-amber-800 dark:hover:text-amber-600 transition">Contact</Link>
          </nav>
          
          <div>
            <Link 
              href="#" 
              className="bg-amber-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-amber-800 transition dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-amber-700 dark:hover:text-white shadow-md"
            >
              Portal Login
            </Link>
          </div>
        </header>
      </div>

      {/* 2. Hero / About Preview Section - Darkened Backdrop Blend */}
      <section id="about" className="relative bg-stone-300/80 text-stone-900 pt-36 pb-24 px-6 overflow-hidden border-b border-stone-400 dark:bg-stone-950 dark:text-white dark:border-stone-900">
        {/* Increased base tint opacity and deepened the colors */}
        <div className="absolute inset-0 bg-orange-900/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,38,13,0.3),transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-8">
          <span className="inline-block px-4 py-1.5 bg-orange-950/20 border border-orange-900/40 text-stone-950 text-sm font-extrabold rounded-full tracking-wide dark:bg-amber-950/50 dark:text-amber-400">
            Shaping Tomorrow, Today
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-stone-950 dark:text-white md:whitespace-nowrap">
            Building Values. <span className="text-amber-950 dark:text-amber-400">Delivering Excellence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-900 max-w-2xl mx-auto font-semibold leading-relaxed dark:text-stone-200">
            Dharma Group Of Companies is a diversified global conglomerate driving impactful innovation across our core industrial sectors.
          </p>

          {/* 3. Our Business Section */}
          <div id="business" className="pt-8 w-full mx-auto overflow-visible scroll-mt-28">
            <p className="text-xs font-black tracking-widest uppercase text-stone-800 mb-8 dark:text-stone-400">Our Core Enterprises</p>
            
            <div className="flex flex-nowrap items-center justify-start xl:justify-center gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide no-scrollbar">
              {sectors.map((sector, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center justify-center w-40 h-40 md:w-44 md:h-44 rounded-full bg-white border-2 border-orange-900/30 shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer group text-center p-4 flex-shrink-0 dark:bg-stone-900 dark:border-stone-700 ${sector.color}`}
                >
                  <span className="text-4xl md:text-5xl mb-2.5 transform transition-transform group-hover:scale-110 duration-300">
                    {sector.icon}
                  </span>
                  <span className="text-xs md:text-sm font-black tracking-wide text-stone-950 group-hover:text-amber-900 dark:text-stone-100 dark:group-hover:text-white px-1 leading-tight break-words max-w-full">
                    {sector.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics / Impact Banner */}
      <section className="bg-white border-b border-stone-200 py-16 dark:bg-stone-900 dark:border-stone-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-stone-950 mb-1 dark:text-zinc-50">25+</p>
            <p className="text-stone-500 text-sm font-medium dark:text-stone-400">Years Of Excellence</p>
          </div>
          <div>
            <p className="text-4xl font-black text-amber-800 mb-1 dark:text-amber-500">12K+</p>
            <p className="text-stone-500 text-sm font-medium dark:text-stone-400">Global Workforce</p>
          </div>
          <div>
            <p className="text-4xl font-black text-stone-950 mb-1 dark:text-zinc-50">6</p>
            <p className="text-stone-500 text-sm font-medium dark:text-stone-400">Major Enterprises</p>
          </div>
          <div>
            <p className="text-4xl font-black text-amber-800 mb-1 dark:text-amber-500">$4.2B</p>
            <p className="text-stone-500 text-sm font-medium dark:text-stone-400">Group Assets Value</p>
          </div>
        </div>
      </section>

      {/* 5. Corporate Footer */}
      <footer id="contact" className="bg-stone-950 text-stone-400 py-16 px-6 dark:bg-black dark:text-stone-600 scroll-mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-900 pb-12 mb-12 dark:border-stone-900">
          <div className="space-y-4">
            <p className="text-xl font-black tracking-tight text-white">DHARMA GROUP</p>
            <p className="text-sm text-stone-500 max-w-xs leading-relaxed dark:text-stone-400">
              Leading markets with principles of high corporate responsibility, sustainability, and dynamic growth paths.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#business" className="hover:text-white transition">Our Business</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase">Inquiries</h4>
            <p className="text-sm text-stone-400">General: info@dharmagroup.com</p>
            <p className="text-sm text-stone-400">Investors: ir@dharmagroup.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4 dark:text-stone-600">
          <p>© {new Date().getFullYear()} Dharma Group Of Companies. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}