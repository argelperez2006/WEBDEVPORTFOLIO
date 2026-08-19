export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-yellow-500/20 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          
          {/* Centered Copyright & Info */}
          <p className="text-xs font-mono text-neutral-500 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">Argel Bote</span>. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}