import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import profileImage from "@/assets/profile.jpg";

export function HomePageBannerSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Tracks cursor position across the banner for dynamic spotlighting
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Section 
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-24 bg-neutral-950 text-white border-b border-yellow-500/20 overflow-hidden group/section"
    >
      {/* Dynamic Cursor Spotlight Shadow */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover/section:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234, 179, 8, 0.12), transparent 80%)`,
        }}
      />

      {/* Background HUD Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab3080a_1px,transparent_1px),linear-gradient(to_bottom,#eab3080a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Cybernetic Frame Corners with Hover Glow */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-400/60 transition-all duration-300 group-hover/section:border-yellow-400 group-hover/section:shadow-[0_0_12px_rgba(250,204,21,0.8)] pointer-events-none" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/60 transition-all duration-300 group-hover/section:border-yellow-400 group-hover/section:shadow-[0_0_12px_rgba(250,204,21,0.8)] pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/60 transition-all duration-300 group-hover/section:border-yellow-400 group-hover/section:shadow-[0_0_12px_rgba(250,204,21,0.8)] pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-400/60 transition-all duration-300 group-hover/section:border-yellow-400 group-hover/section:shadow-[0_0_12px_rgba(250,204,21,0.8)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* --- HIGH-TECH CLEAR PROFILE CONTAINER --- */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="group relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center cursor-pointer">
              
              {/* Outer Rotating Target Ring with Intense Glow */}
              <div className="absolute inset-0 rounded-full border border-dashed border-yellow-400/30 animate-[spin_20s_linear_infinite] group-hover:border-yellow-400 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] group-hover:duration-[8s] transition-all duration-300" />

              {/* Pulsing Concentric Glow Aura */}
              <div className="absolute inset-2 rounded-full border border-yellow-400/20 group-hover:border-yellow-400/70 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300" />
              <div className="absolute inset-0 rounded-full bg-yellow-400/5 blur-2xl group-hover:bg-yellow-400/30 transition-all duration-500" />

              {/* Holographic Projection Base Ring */}
              <div className="absolute bottom-1 w-3/4 h-8 rounded-[100%] border-2 border-yellow-400/80 bg-yellow-400/10 shadow-[0_0_25px_rgba(234,179,8,0.5)] z-20 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] transition-all duration-300" />

              {/* Profile Image Container */}
              <div className="relative w-60 h-60 md:w-68 md:h-68 rounded-full overflow-hidden border-2 border-yellow-400/70 bg-neutral-900 shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-500 group-hover:border-yellow-400 group-hover:shadow-[0_0_50px_rgba(250,204,21,0.8)] z-10">
                
                <img
                  src={profileImage}
                  alt="Argel Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] pointer-events-none" />
              </div>

              {/* Floating Binary Data Badge with Intense Yellow Drop Shadow */}
              <div className="absolute -bottom-2 -right-2 bg-neutral-900/90 border border-yellow-400/50 rounded-lg p-2 text-[10px] font-mono text-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.2)] backdrop-blur-sm z-30 transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping shadow-[0_0_8px_#facc15]" />
                  <span>SYSTEM::ONLINE</span>
                </div>
              </div>

            </div>
          </div>
          {/* --- END PROFILE CONTAINER --- */}

          {/* Banner Text Section */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
            
            {/* Status Pill Badge with Interactive Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 backdrop-blur-md transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#facc15]" />
              Welcome to My Portfolio
            </div>

            {/* Main Header */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_12px_rgba(250,204,21,0.4)] transition-all duration-300 hover:drop-shadow-[0_0_22px_rgba(250,204,21,0.9)] cursor-pointer">
                Argel
              </span>
              <br />
              Bringing Web Concepts to Life
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-normal max-w-2xl">
              Aspiring Frontend Developer and IT Student passionate about building clean, responsive web applications using React, TypeScript, and Tailwind CSS
            </p>

            {/* Action Buttons with Dynamic Yellow Glows */}
            <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4 pt-2">
              <NavLink to="/about" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto text-base px-8 h-12 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.9)] hover:scale-[1.02] transition-all duration-300 border border-yellow-300">
                  Know Me
                </Button>
              </NavLink>
              
              <NavLink to="/contact" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto text-base px-8 h-12 bg-neutral-900 text-yellow-300 border border-yellow-400/40 hover:border-yellow-400 hover:bg-neutral-800 hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:scale-[1.02] transition-all duration-300">
                  Contact Me
                </Button>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}