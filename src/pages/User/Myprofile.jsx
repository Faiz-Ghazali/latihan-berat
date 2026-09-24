
function Myprofile() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl rounded-xl bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 border-b pb-5 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600 sm:h-20 sm:w-20 sm:text-2xl">
              U
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">My Profile</h1>
              <p className="text-gray-500">Manage your personal information</p>
            </div>
          </div>
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto">
            Edit Profile
          </button>
        </div>

        <div className="grid gap-5 pt-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">John Doe</p>
            <p className="mt-1 font-medium text-gray-800">johndoue1200</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="mt-1 font-medium text-gray-800">user@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="mt-1 font-medium text-gray-800">+62 812 3456 7890</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="mt-1 font-medium text-gray-800">Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Myprofile
