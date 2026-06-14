export default function Card({ title, description, icon }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
      <div className="text-4xl select-none" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
