import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="bg-gray-50 w-full flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen py-20 flex flex-col justify-center max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          Login to PlacementPro
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          Authentication is coming soon. You'll be able to sign in with your email or Google account to sync your progress across devices.
        </p>
      </main>
      <Footer />
    </div>
  );
}
