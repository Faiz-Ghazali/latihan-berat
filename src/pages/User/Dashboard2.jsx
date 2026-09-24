import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard2() {
  return (
    <section className="space-y-6 rounded-2xl border border-sky-500/20 bg-slate-950/80 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Selamat Datang Kembali!
          </h1>
          <p className="text-sm text-sky-100/75">
            Ringkasan garasi dan riset mobil tersimpan Anda.
          </p>
        </div>
        <Button className="bg-sky-500 text-white hover:bg-sky-400">
          + Tambah Mobil Favorit
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Database Mobil", "1,240 Unit", "+12 bulan ini"],
          ["Tersimpan di Garasi", "18 Unit", "Active"],
          ["Perbandingan Spesifikasi", "4 Model", "In progress"],
          ["Poin Kontribusi", "1,240 Pts", "+18% Top User"],
        ].map(([label, val, note]) => (
          <Card key={label} className="border-slate-700 bg-slate-900/80">
            <CardContent className="p-4">
              <p className="text-xs font-medium text-sky-100/70">{label}</p>
              <div className="mt-2 flex items-baseline justify-between gap-2">
                <p className="text-2xl font-bold text-white">{val}</p>
                <span className="text-xs font-medium text-emerald-300">
                  {note}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-slate-700 bg-slate-900/80">
          <CardContent className="p-5">
            <h2 className="font-semibold text-white">
              Aktivitas Riset Terakhir
            </h2>
            <div className="mt-4 divide-y divide-slate-700">
              {[
                [
                  "Membandingkan Porsche 911 vs BMW M4",
                  "Hari ini, 10:24 AM",
                  "Selesai",
                ],
                [
                  "Menyimpan Tesla Model S ke Garasi",
                  "Kemarin, 03:15 PM",
                  "Selesai",
                ],
                [
                  "Mengirim Ulasan Spesifikasi Ferrari SF90",
                  "2 hari yang lalu",
                  "Proses Review",
                ],
              ].map(([title, date, status]) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-3 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-sky-50">{title}</p>
                    <p className="text-xs text-sky-100/60">{date}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status === "Selesai" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-sky-500/30 bg-sky-950/80 text-white">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg text-white">
              Kelengkapan Profil Garasi
            </h2>
            <p className="mt-1 text-xs text-sky-100/75">
              Lengkapi preferensi mobil impian Anda untuk saran spesifikasi
              otomatis.
            </p>
            <div className="mt-6 h-2 rounded-full bg-sky-500/30">
              <div className="h-2 w-3/4 rounded-full bg-sky-300" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-sky-100/80">
              <span>Progres Profil</span>
              <span>75%</span>
            </div>
            <Button className="mt-6 w-full bg-white text-sky-700 hover:bg-sky-100">
              Lengkapi Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
