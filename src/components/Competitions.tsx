export default function Competitions() {
  return (
    <section id="competitions" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Competitions</h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">We compete in several major competitions that push our team to design, program and iterate — below are the events we focus on.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-6 card-hover border border-transparent hover:border-purple-500/30 shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-purple-600/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-3-6 3 1.5-8L3 8.5 9 8 12 2z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">FTC (FIRST Tech Challenge)</h3>
                <p className="text-sm md:text-base text-gray-400 mt-2">Alliance-based seasonal robotics competitions organized by FIRST. FTC promotes engineering, outreach and creative problem solving.</p>

                <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
                  <div className="flex gap-2">
                    <span className="text-xs bg-purple-800/30 text-purple-200 px-2 py-1 rounded-full">International</span>
                  </div>

                  <a href="https://www.firstinspires.org/" target="_blank" rel="noopener noreferrer" className="inline-flex sm:inline-flex items-center gap-2 text-sm bg-yellow-300 text-gray-900 px-3 py-2 rounded-md shadow-sm hover:scale-105 transition w-full sm:w-auto justify-center">Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-5 sm:p-6 card-hover border border-transparent hover:border-purple-500/30 shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-purple-600/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4 4h16v2H4zM4 10h10v2H4zM4 16h16v2H4z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">RoboTec</h3>
                    <p className="text-sm md:text-base text-gray-400 mt-2">RoboTec is a Romanian competition series where teams test engineering robustness, strategy and competitive readiness on regional and national stages.</p>

                <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
                  <div className="flex gap-2">
                        <span className="text-xs bg-purple-800/30 text-purple-200 px-2 py-1 rounded-full">Regional</span>
                  </div>

                  <a href="https://robotec.ligaac.ro/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm bg-yellow-300 text-gray-900 px-3 py-2 rounded-md shadow-sm hover:scale-105 transition w-full sm:w-auto justify-center">Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-5 sm:p-6 card-hover border border-transparent hover:border-purple-500/30 shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-purple-600/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 4h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm2 14h10v2H7v-2z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">Infoeducatie</h3>
                <p className="text-sm md:text-base text-gray-400 mt-2">Infoeducatie is a national event for student IT projects — a great place to show software, control and AI work to a broader audience.</p>

                <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
                  <div className="flex gap-2">
                    <span className="text-xs bg-purple-800/30 text-purple-200 px-2 py-1 rounded-full">National</span>
                  </div>

                  <a href="https://infoeducatie.ro/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm bg-yellow-300 text-gray-900 px-3 py-2 rounded-md shadow-sm hover:scale-105 transition w-full sm:w-auto justify-center">Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
