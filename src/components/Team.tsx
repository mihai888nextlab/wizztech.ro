export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Team</h2>
        <div className="space-y-8">
          {/* First row: two Co-Team Leaders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Co-Team Leader", "Team Leadership"],
              ["Co-Team Leader", "Team Leadership"],
            ].map(([title, role], idx) => (
              <div key={title + idx} className={"text-center " + (idx === 0 ? 'md:col-start-2' : 'md:col-start-3')}>
                <div className="w-32 h-32 mx-auto mb-4 bg-purple-600/20 rounded-full overflow-hidden">
                  <img src="/image.png" alt={String(title)} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-purple-400">{title}</h4>
                <p className="text-gray-400 text-sm">{role}</p>
              </div>
            ))}
          </div>

          {/* Second row: other leads */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["Hardware Lead", "Mechanical Design"],
              ["Software Lead", "AI & Automation"],
              ["Financial Lead", "Budget & Sponsorship"],
              ["Media Lead", "Photography & Social"],
            ].map(([title, role]) => (
              <div key={title} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-purple-600/20 rounded-full overflow-hidden">
                  <img src="/image.png" alt={String(title)} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-purple-400">{title}</h4>
                <p className="text-gray-400 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
