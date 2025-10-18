import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 sm:p-16 font-sans">
      {/* Header */}
      <header className="mb-12 text-center sm:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          🧠 StudyWell
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Monitor your productivity, manage stress, and get adaptive break suggestions.
        </p>
      </header>

      {/* Dashboard */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Productivity Signals */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">📊 Productivity Signals</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Track typing rhythm, task logs, and app usage to analyze your focus patterns.
          </p>
          <button className="mt-auto px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            View Dashboard
          </button>
        </div>

        {/* Stress & Fatigue Detection */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">💡 Stress & Fatigue</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Detect signs of stress or fatigue and get insights on when to take a break.
          </p>
          <button className="mt-auto px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">
            Check Status
          </button>
        </div>

        {/* Adaptive Breaks */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">☕ Adaptive Breaks</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Get AI-powered suggestions for breaks tailored to your current stress and focus levels.
          </p>
          <button className="mt-auto px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">
            Suggest Break
          </button>
        </div>

        {/* Canvas & Course Resources */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">📚 Canvas & Resources</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            View upcoming assignments, lectures, and AI-curated study materials.
          </p>
          <button className="mt-auto px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700">
            Open Resources
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; 2025 StudyWell • Built with Next.js & TailwindCSS
      </footer>
    </div>
  );
}

