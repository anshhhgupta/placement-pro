export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4 md:px-16 flex flex-col items-center text-center">
      {/* Decorative vector graphics for visual excellence */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse translate-x-16 translate-y-16"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Ace Your Placements.<br />
          All in One Place.
        </h1>
        
        <p className="text-base md:text-lg text-blue-100 font-light max-w-2xl leading-relaxed">
          Track DSA problems, monitor contest history, and prepare company-wise &mdash; with AI-powered interview coaching.
        </p>
        
        <div className="mt-4">
          <button 
            type="button"
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
