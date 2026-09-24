import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard2() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Selamat Datang Kembali!</h1>
          <p className="text-sm text-slate-500">Ringkasan garasi dan riset mobil tersimpan Anda.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-500">+ Tambah Mobil Favorit</Button>
      </div>

      {/* Stats Widget */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Database Mobil", "1,240 Unit", "+12 bulan ini"],
          ["Tersimpan di Garasi", "18 Unit", "Active"],
          ["Perbandingan Spesifikasi", "4 Model", "In progress"],
          ["Poin Kontribusi", "1,240 Pts", "+18% Top User"],
        ].map(([label, val, note]) => (
          <Card key={label} className="border-slate-200">
            <CardContent className="p-4">
              <p className="text-xs font-medium text-slate-500">{label}</p>
              <div className="mt-2 flex items-baseline justify-between">
                <p className="text-2xl font-bold text-slate-800">{val}</p>
                <span className="text-xs font-medium text-emerald-600">{note}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Section */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-5">
            <h2 className="font-semibold text-slate-800">Aktivitas Riset Terakhir</h2>
            <div className="mt-4 divide-y divide-slate-100">
              {[
                ["Membandingkan Porsche 911 vs BMW M4", "Hari ini, 10:24 AM", "Selesai"],
                ["Menyimpan Tesla Model S ke Garasi", "Kemarin, 03:15 PM", "Selesai"],
                ["Mengirim Ulasan Spesifikasi Ferrari SF90", "2 hari yang lalu", "Proses Review"],
              ].map(([title, date, status]) => (
                <div key={title} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{title}</p>
                    <p className="text-xs text-slate-400">{date}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status === "Selesai" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-600 text-white">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg">Kelengkapan Profil Garasi</h2>
            <p className="mt-1 text-xs text-indigo-200">Lengkapi preferensi mobil impian Anda untuk saran spesifikasi otomatis.</p>
            <div className="mt-6 h-2 rounded-full bg-indigo-400/50">
              <div className="h-2 w-3/4 rounded-full bg-white" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-indigo-200">
              <span>Progres Profil</span>
              <span>75%</span>
            </div>
            <Button className="mt-6 w-full bg-white text-indigo-600 hover:bg-slate-100">
              Lengkapi Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}