import React from 'react';

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'Facebook',
      handle: '@argel.perez',
      url: 'https://web.facebook.com/argelperez031306',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      handle: '@argel-dev',
      url: 'https://github.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: 'Argel Bote',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@argel_insta',
      url: 'https://www.instagram.com/r_dyil',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans flex items-center justify-center">
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#eab308 1px, transparent 1px), linear-gradient(90deg, #eab308 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div>
          
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Feel free to reach out directly via email or explore my online presence across various platforms below.
          </p>
        </div>

        {/* Direct Information Hero Cards */}
        <div className="bg-[#141414] border border-zinc-800 rounded-xl p-6 sm:p-8 relative">
          <h2 className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-6">
            DIRECT CONTACT CHANNELS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:argelperez031306@gmail.com"
              className="flex items-center space-x-4 p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl hover:border-yellow-500/50 hover:bg-zinc-800/60 transition-all group"
            >
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-xl group-hover:scale-105 transition-transform">
                📧
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-gray-500 font-mono uppercase">Email Address</p>
                <p className="text-sm font-semibold text-gray-200 group-hover:text-yellow-400 transition-colors truncate">
                  argelperez031306@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center space-x-4 p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl">
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-xl">
                📍
              </div>
              <div>
                <p className="text-xs text-gray-500 font-mono uppercase">Location</p>
                <p className="text-sm font-semibold text-gray-200">
                  Cordova, Cebu, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Grid (4 Columns) */}
        <div className="bg-[#141414] border border-zinc-800 rounded-xl p-6 sm:p-8 relative">
          <h2 className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-6">
          ONLINE NETWORKS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-zinc-900/60 border border-zinc-800/80 rounded-xl hover:border-yellow-500/50 hover:bg-zinc-800/60 hover:-translate-y-1 transition-all group text-center"
              >
                <div className="p-3 bg-zinc-800/80 rounded-full text-gray-400 group-hover:text-yellow-400 group-hover:bg-yellow-500/10 transition-colors mb-3">
                  {social.icon}
                </div>
                <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {social.name}
                </p>
                <p className="text-xs text-gray-500 font-mono mt-1 truncate max-w-full">
                  {social.handle}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
