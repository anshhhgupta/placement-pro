export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 px-4 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
        <span>&copy; 2026 <strong className="text-white font-semibold">PlacementPro</strong>.</span>
        <span>Built for engineering students.</span>
      </div>
    </footer>
  );
}
