import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 w-full flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen py-20 flex flex-col justify-center max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          Your Dashboard
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          Your personalized placement dashboard is coming soon. Here you'll track your DSA progress, view contest ratings, monitor streaks, and get AI-driven recommendations.
        </p>
      </main>
      <Footer />
    </div>
  );
}
