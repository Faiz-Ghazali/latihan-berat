const dummySantri = {
  nama: "Ahmad Fauzan",
  nis: "11223344",
  kelas: "XI IPA 1",
  kamar: "Al-Farabi 03",
};

const dummyNilai = [
  { id: 1, pelajaran: "Matematika", nilai: 88 },
  { id: 2, pelajaran: "Bahasa Indonesia", nilai: 92 },
  { id: 3, pelajaran: "Bahasa Inggris", nilai: 86 },
  { id: 4, pelajaran: "Fisika", nilai: 90 },
  { id: 5, pelajaran: "Pendidikan Agama Islam", nilai: 94 },
];

function SantriNilai({ santri = dummySantri, nilai = dummyNilai }) {
  const dataSantri = santri || dummySantri;
  const dataNilai = nilai.length > 0 ? nilai : dummyNilai;

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-xl font-bold text-gray-800">Daftar Nilai Santri</h1>
        <div className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-4">
          <p>
            <strong>Nama:</strong> {dataSantri.nama || dataSantri.name || "-"}
          </p>
          <p>
            <strong>NIS:</strong> {dataSantri.nis || dataSantri.nisn || "-"}
          </p>
          <p>
            <strong>Kelas:</strong>{" "}
            {dataSantri.kelas || dataSantri.class || "-"}
          </p>
          <p>
            <strong>Kamar:</strong> {dataSantri.kamar || dataSantri.room || "-"}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Mata Pelajaran</th>
              <th className="px-4 py-3 text-center">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {dataNilai.length > 0 ? (
              dataNilai.map((item, index) => (
                <tr
                  key={`${item.id || item.pelajaran || item.subject}-${index}`}
                  className="border-b"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    {item.pelajaran ||
                      item.subject ||
                      item.mataPelajaran ||
                      "-"}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold">
                    {item.nilai ?? item.value ?? "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-8 text-center text-gray-500">
                  Belum ada data nilai.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SantriNilai;
