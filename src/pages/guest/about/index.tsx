import { Briefcase, GraduationCap, Terminal, Sparkles, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] bg-neutral-950 text-neutral-200 py-12 px-4 flex items-center justify-center overflow-hidden relative">
      
      {/* Dynamic Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl w-full space-y-8 relative z-10">
        
        {/* Header Title */}
        <div className="space-y-2 border-b border-yellow-500/20 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div>
           
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">Argel</span>
            </h1>
          </div>
          <div>
           
          </div>
        </div>

        {/* Vertical Stack of Interactive Cards */}
        <div className="space-y-8">
          
          {/* CARD 1: College Student */}
          <div className="relative group perspective-1000">
            {/* Pulsing Gradient Border Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/40 via-amber-500/20 to-yellow-600/40 rounded-2xl blur-md opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
            
            <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 sm:p-7 hover:border-yellow-400 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center gap-7">
              
              {/* IMAGE SLOT WITH CURSOR EFFECT */}
              <div className="relative w-full sm:w-52 h-64 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-950 border border-yellow-500/30 p-2 flex items-center justify-center group/img cursor-pointer transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]">
                
                {/* Glowing Overlay Lens on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-amber-400/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                {/* Hover Badge Indicator */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0 bg-yellow-400 text-neutral-950 px-2 py-1 rounded-md text-[10px] font-extrabold font-mono flex items-center gap-1 shadow-lg">
                  <Eye className="w-3 h-3" />
                  <span>PREVIEW</span>
                </div>

                <img
                  src="/student-photo.jpg" 
                  alt="Argel Student Life"
                  className="w-full h-full object-contain rounded-lg transition-all duration-700 ease-out group-hover/img:scale-110 group-hover/img:rotate-1 group-hover/img:brightness-110"
                />
              </div>

              {/* Text Right */}
              <div className="w-full space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>COLLEGE STUDENT</span>
                  </div>
                  
                  <h2 className="text-2xl font-extrabold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    Aspiring Frontend Developer
                  </h2>
                  
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Currently pursuing my college degree while sharpening my programming skills. I focus on building responsive web interfaces, learning modern frameworks like React and Next.js, and mastering frontend design.
                  </p>
                </div>

                {/* Badges */}
                <div className="pt-3 border-t border-yellow-500/10">
                  <p className="text-[10px] font-mono text-neutral-500 mb-2 tracking-widest uppercase">Academic & Dev Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-neutral-950 border border-yellow-500/20 text-xs font-mono text-neutral-300 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-500/10 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CARD 2: McDo Worker */}
          <div className="relative group perspective-1000">
            {/* Pulsing Gradient Border Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/40 via-amber-500/20 to-yellow-600/40 rounded-2xl blur-md opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
            
            <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 sm:p-7 hover:border-yellow-400 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center gap-7">
              
              {/* IMAGE SLOT WITH CURSOR EFFECT */}
              <div className="relative w-full sm:w-52 h-64 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-950 border border-yellow-500/30 p-2 flex items-center justify-center group/img cursor-pointer transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]">
                
                {/* Glowing Overlay Lens on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-amber-400/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                {/* Hover Badge Indicator */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0 bg-yellow-400 text-neutral-950 px-2 py-1 rounded-md text-[10px] font-extrabold font-mono flex items-center gap-1 shadow-lg">
                  <Eye className="w-3 h-3" />
                  <span>PREVIEW</span>
                </div>

                <img
                  src="/mcdo-photo.jpg" 
                  alt="Argel McDonald's Work"
                  className="w-full h-full object-contain rounded-lg transition-all duration-700 ease-out group-hover/img:scale-110 group-hover/img:-rotate-1 group-hover/img:brightness-110"
                />
              </div>

              {/* Text Right */}
              <div className="w-full space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>WORK EXPERIENCE</span>
                  </div>
                  
                  <h2 className="text-2xl font-extrabold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    McDonald's Crew Member
                  </h2>
                  
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Balancing work and academics has built my strong work ethic, discipline, and time management skills. Working at McDonald's taught me team coordination, handling fast-paced operations, and delivering great customer service.
                  </p>
                </div>

                {/* Badges */}
                <div className="pt-3 border-t border-yellow-500/10">
                  <p className="text-[10px] font-mono text-neutral-500 mb-2 tracking-widest uppercase">Key Work Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["Time Management", "Teamwork", "Fast-Paced Ops", "Customer Service"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md bg-neutral-950 border border-yellow-500/20 text-xs font-mono text-neutral-300 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-500/10 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
