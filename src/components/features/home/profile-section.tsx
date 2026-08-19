export function ProfileSection() {
  const profile = {
    name: "Argel Bote",
    email: "argelperez031306@gmail.com",
  };

  return (
    <section className="bg-neutral-950 border-t border-yellow-500/10 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900/60 border border-yellow-500/20 text-xs font-mono">
          <span className="text-neutral-400">System Profile</span>
          <span className="text-yellow-500/40">|</span>
          <span className="text-white font-semibold">{profile.name}</span>
          <span className="text-yellow-500/40">|</span>
          <span className="text-yellow-400/80">{profile.email}</span>
        </div>
      </div>
    </section>
  );
}