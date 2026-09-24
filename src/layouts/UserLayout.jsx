function UserLayout({ children }) {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-50 px-3 py-4 text-gray-800 sm:px-6 sm:py-6">
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </main>
  )
}

export default UserLayout
