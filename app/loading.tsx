export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,150,243,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_28%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
        <img alt="Higher Marketing Plus" className="mb-8 h-auto w-40 animate-pulse" src="/figma-assets/hmp-logo.png" />
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2196F3] opacity-80" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2196F3]" />
          </span>
          <span className="text-xs uppercase tracking-[0.28em] text-zinc-300">Loading Page</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-[#2196F3] via-[#7DD3FC] to-[#F59E0B]" />
        </div>
      </div>
    </div>
  );
}
