export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
  <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About <img src="/text-logo.png" alt="WizzTech" className="inline-block pb-1 h-4 md:h-6 ml-2" /></h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              WizzTech is a competitive robotics team dedicated to pushing the boundaries of innovation and technology. We participate in FTC and various other robotics competitions, where we combine creativity, engineering, and teamwork to create cutting-edge solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-300">Innovation & Creativity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">Teamwork & Collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-gray-300">Excellence & Achievement</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-tr from-purple-800/10 via-blue-700/5 rounded-2xl p-4 card-hover overflow-hidden">
              <div className="w-full max-w-[2560px] mx-auto aspect-[16/9]">
                <video
                  className="rounded-lg w-full h-full object-cover"
                  width={2560}
                  height={1440}
                  style={{ objectPosition: 'center' }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Background video of our team"
                >
                  <source src="/bg-video-2.mp4" type="video/mp4" />
                  {/* Fallback text for browsers that don't support video */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
