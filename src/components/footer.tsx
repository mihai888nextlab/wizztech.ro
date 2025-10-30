export default function Footer() {
  return (
    <footer className="bg-gray-800/60 border-t border-purple-600/10 py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src="/logo.png" alt="WizzTech logo" className="w-10 rounded-md" />
            <div className="text-left">
              <p className="text-sm text-gray-300 font-semibold">WizzTech Robotics</p>
              <p className="text-xs text-gray-400">Teorethical High School &quot;Grigore Moisil&quot;, Timisoara, Romania</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} WizzTech Robotics. All rights reserved.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 justify-center md:justify-end text-center md:text-right">
            <a
              href="https://github.com/crististg"
              aria-label="Cristi's GitHub"
              title="crististg on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300"
            >
              crististg
            </a>

            <a
              href="https://github.com/mihai888nextlab"
              aria-label="Mihai's GitHub"
              title="mihai888nextlab on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300"
            >
              mihai888nextlab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  