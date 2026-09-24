export default function UserLayout({ children }) {
  return (
    <main className="min-h-screen w-full bg-slate-50 px-4 py-6 text-slate-800 sm:px-8">
      <div className="mx-auto max-w-6xl">{children}</div>
    </main>
  );
}