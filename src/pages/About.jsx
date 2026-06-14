import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-gray-50 w-full flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen py-20 flex flex-col justify-center max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          About PlacementPro
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          PlacementPro is built for engineering students who are serious about cracking campus placements. We bring together DSA tracking, contest history, company prep sheets, and AI-powered mock interviews into one seamless platform.
        </p>
      </main>
      <Footer />
    </div>
  );
}
