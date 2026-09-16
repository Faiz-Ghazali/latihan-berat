function Santri() {
  const santri = [
    { id: 1, nama: "Ahmad Fauzan", kelas: "XI IPA 1", status: "Aktif" },
    { id: 2, nama: "Aisyah Putri", kelas: "XI IPA 2", status: "Aktif" },
    { id: 3, nama: "Muhammad Rizky", kelas: "XI IPS 1", status: "Aktif" },
  ];

  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-1">Data Santri</h1>
          <p className="text-muted mb-0">Kelola data santri dengan mudah.</p>
        </div>
        <button type="button" className="btn btn-primary">
          + Tambah Santri
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Santri</th>
                  <th>Kelas</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {santri.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.kelas}</td>
                    <td>
                      <span className="badge bg-success">{item.status}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Santri;
