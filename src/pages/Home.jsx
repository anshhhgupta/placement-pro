import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

const CARDS_DATA = [
  { icon: "📘", title: "DSA Tracker", description: "Log problems by topic and difficulty across all platforms." },
  { icon: "🏆", title: "Contest History", description: "Sync your ratings from Codeforces, LeetCode, and more." },
  { icon: "🏢", title: "Company Prep", description: "Curated problem sheets for top recruiting companies." },
  { icon: "🎙️", title: "Mock Interviews", description: "Schedule and track mock interviews with structured feedback." },
  { icon: "📊", title: "Progress Analytics", description: "Visual dashboards showing your topic-wise readiness." },
  { icon: "🔥", title: "Daily Streaks", description: "Stay consistent with streak tracking and daily goals." }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden w-full">
      <Navbar />
      
      <main className="flex-grow w-full flex flex-col gap-16 pb-16">
        <Hero />
        
        {/* Features section wrapped in max-w-6xl mx-auto px-4 */}
        <section className="max-w-6xl mx-auto px-4 w-full flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              What You Can Do
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Supercharge your career preparation with specialized tools built specifically for modern engineering candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {CARDS_DATA.map((card, index) => (
              <Card 
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
