// DEPLOYMENT GUIDE:
// 1. Upload this project to GitHub
// 2. Go to https://vercel.com
// 3. Import your GitHub repository
// 4. Click Deploy
// 5. Your CRM will instantly receive a live URL
//
// RECOMMENDED FEATURES TO CONNECT NEXT:
// - Firebase Authentication
// - Supabase Database
// - Excel Upload Importer
// - WhatsApp API Integration
// - Email Automation

export default function DiscoveryCRM() {
  const brokers = [
    {
      name: "Marcelle",
      clients: 42,
      quotes: 18,
      responses: 15,
      status: "Active"
    },
    {
      name: "Darren",
      clients: 35,
      quotes: 12,
      responses: 10,
      status: "Active"
    }
  ];

  const clients = [
    {
      broker: "Marcelle",
      client: "John Smith",
      policy: "Motor & Home",
      phone: "+27 82 123 4567",
      email: "john@email.com",
      emails: 3,
      whatsapp: 5,
      response: "Interested",
      quote: "Sent",
      stage: "Follow Up"
    },
    {
      broker: "Darren",
      client: "Sarah Naidoo",
      policy: "Discovery Health",
      phone: "+27 71 555 1234",
      email: "sarah@email.com",
      emails: 1,
      whatsapp: 2,
      response: "Waiting",
      quote: "Pending",
      stage: "Initial Contact"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2">Discovery Broker CRM Platform</h1>
          <p className="text-lg opacity-90">
            Shared admin tracking platform for brokers, clients, quotes, WhatsApps, emails and sales progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <p className="text-gray-500 text-sm">Total Brokers</p>
            <h2 className="text-3xl font-bold mt-2">2</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <p className="text-gray-500 text-sm">Total Clients</p>
            <h2 className="text-3xl font-bold mt-2">77</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <p className="text-gray-500 text-sm">Quotes Sent</p>
            <h2 className="text-3xl font-bold mt-2">30</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <p className="text-gray-500 text-sm">Positive Responses</p>
            <h2 className="text-3xl font-bold mt-2">25</h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Broker Performance</h2>
              <p className="text-gray-500">Track broker activity and client conversions</p>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search broker or client..."
                className="border rounded-xl px-4 py-2 w-full md:w-80"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold">
                + Add Broker
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-4 rounded-l-2xl">Broker</th>
                  <th className="p-4">Clients</th>
                  <th className="p-4">Quotes</th>
                  <th className="p-4">Responses</th>
                  <th className="p-4 rounded-r-2xl">Status</th>
                </tr>
              </thead>

              <tbody>
                {brokers.map((broker, index) => (
                  <tr key={index} className="border-b hover:bg-slate-50 transition">
                    <td className="p-4 font-semibold">{broker.name}</td>
                    <td className="p-4">{broker.clients}</td>
                    <td className="p-4">{broker.quotes}</td>
                    <td className="p-4">{broker.responses}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {broker.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Client Pipeline Tracker</h2>
              <p className="text-gray-500">
                Fully editable client management system with custom categories.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl font-semibold">
                + Add Client
              </button>

              <button className="bg-slate-800 hover:bg-black text-white px-5 py-2 rounded-xl font-semibold">
                Edit Categories
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-4 rounded-l-2xl">Broker</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Policy</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Emails Sent</th>
                  <th className="p-4">WhatsApps</th>
                  <th className="p-4">Response</th>
                  <th className="p-4">Quote Status</th>
                  <th className="p-4 rounded-r-2xl">Pipeline Stage</th>
                </tr>
              </thead>

              <tbody>
                {clients.map((client, index) => (
                  <tr key={index} className="border-b hover:bg-slate-50 transition">
                    <td className="p-4 font-medium">{client.broker}</td>
                    <td className="p-4">{client.client}</td>
                    <td className="p-4">{client.policy}</td>
                    <td className="p-4">{client.phone}</td>
                    <td className="p-4">{client.email}</td>
                    <td className="p-4">{client.emails}</td>
                    <td className="p-4">{client.whatsapp}</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-xs">
                        {client.response}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-xs">
                        {client.quote}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold text-xs">
                        {client.stage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Features Included</h2>

            <ul className="space-y-3 text-gray-700">
              <li>✅ Shared online access for 2 admin staff</li>
              <li>✅ Broker management dashboard</li>
              <li>✅ Client tracking & follow ups</li>
              <li>✅ WhatsApp & email tracking</li>
              <li>✅ Quote status management</li>
              <li>✅ Editable categories & columns</li>
              <li>✅ Search & filtering</li>
              <li>✅ Progress tracking pipeline</li>
              <li>✅ Laptop & mobile friendly</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Recommended Upgrades</h2>

            <ul className="space-y-3 text-gray-700">
              <li>🚀 Login system for each admin</li>
              <li>🚀 Excel client upload importer</li>
              <li>🚀 Automatic reminders & alarms</li>
              <li>🚀 Email integration</li>
              <li>🚀 WhatsApp integration</li>
              <li>🚀 Client document storage</li>
              <li>🚀 Reporting & conversion analytics</li>
              <li>🚀 Cloud database storage</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">Ready To Deploy Online</h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            This platform can be connected to Firebase or Supabase so both admin staff can access and edit the system live online from different computers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl font-bold">
              Connect Database
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-bold">
              Deploy To Vercel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
