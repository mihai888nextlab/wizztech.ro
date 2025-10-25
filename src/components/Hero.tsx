export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative circuit-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900/90"></div>
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="w-40 h-40 mx-auto mb-8 floating">
          <div className="w-full h-full bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-yellow-400/10 rounded-full flex items-center justify-center pulse-glow">
            <img src="/logo.png" alt="WizzTech logo" className="w-20" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4">
          <img src="/text-logo.png" alt="WizzTech" className="w-56 md:w-80" />
          <span className="text-4xl md:text-5xl font-semibold text-gray-200">Robotics</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Innovation Through Technology</p>
        <div className="tech-line max-w-md mx-auto mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg font-semibold text-white transition-all transform hover:scale-105">
            Join Our Team
          </button>
          <a href="#about" className="px-8 py-3 border border-purple-500/30 hover:bg-purple-500/20 rounded-lg font-semibold transition-all inline-flex items-center justify-center">Learn More</a>
        </div>
      </div>
    </section>
  );
}
