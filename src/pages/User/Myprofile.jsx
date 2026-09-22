
function Myprofile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-semibold text-blue-600">
              U
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
              <p className="text-gray-500">Manage your personal information</p>
            </div>
          </div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        <div className="grid gap-5 pt-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="mt-1 font-medium text-gray-800">User Name</p>
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
    </div>
  )
}

export default Myprofile
