export default function GlassCard({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-accent/50 rounded-2xl p-6 hover:shadow-xl transition-shadow transform">
      {children}
    </div>
  );
}
