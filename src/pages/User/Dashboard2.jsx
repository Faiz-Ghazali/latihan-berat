
function Dashboard2() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-gray-500">User dashboard</p>
            <h1 className="text-3xl font-bold">Welcome back!</h1>
          </div>
          <button className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-indigo-700">
            New activity
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Total activities', '24', '+12%'],
            ['Completed', '18', '+8%'],
            ['In progress', '4', ''],
            ['Total points', '1,240', '+18%'],
          ].map(([label, value, change]) => (
            <div key={label} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">{label}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-3xl font-bold">{value}</p>
                {change && <span className="text-sm font-medium text-green-600">{change}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent activities</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</button>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                ['Profile information updated', 'Today, 10:24 AM', 'Completed'],
                ['Monthly report downloaded', 'Yesterday, 03:15 PM', 'Completed'],
                ['Account verification', '2 days ago', 'In progress'],
              ].map(([title, date, status]) => (
                <div key={title} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="mt-1 text-sm text-gray-500">{date}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-indigo-600 p-6 text-white shadow-sm">
            <h2 className="text-lg font-semibold">Complete your profile</h2>
            <p className="mt-2 text-sm text-indigo-100">Add more information to get the most from your account.</p>
            <div className="mt-6 h-2 rounded-full bg-indigo-400">
              <div className="h-2 w-3/4 rounded-full bg-white" />
            </div>
            <div className="mt-2 flex justify-between text-sm text-indigo-100"><span>Profile progress</span><span>75%</span></div>
            <button className="mt-6 rounded-lg bg-white px-4 py-2 font-medium text-indigo-600 hover:bg-indigo-50">Complete profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard2
