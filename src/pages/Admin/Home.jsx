import {
  Car,
  Fuel,
  Gauge,
  Plus,
  Search,
  TrendingUp,
  Users,
  ArrowUpRight,
  MoreVertical,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="space-y-8 rounded-2xl border border-sky-500/20 bg-slate-950/80 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-slate-700 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-sky-400/40 bg-sky-950/60 text-sky-200"
            >
              <ShieldCheck className="mr-1 size-3 text-sky-300" /> Admin Portal
            </Badge>
            <span className="text-xs text-sky-200/80">AutoBase v2.4</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Overview Database Mobil
          </h1>
          <p className="text-sm text-sky-100/75">
            Kelola katalog kendaraan, pantau statistik pengguna, dan atur
            pembaruan spesifikasi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-sky-400/50 bg-slate-900 text-sky-100 hover:bg-sky-500/10 hover:text-white"
          >
            <Search className="size-4 text-sky-300" /> Cari Data
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-sky-500 text-white hover:bg-sky-400"
          >
            <Plus className="size-4" /> Tambah Mobil Baru
          </Button>
        </div>
      </div>

      {/* Grid Quick Stats Metric */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-sky-100/80">
              Total Mobil Terdaftar
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300">
              <Car className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,842</div>
            <p className="mt-1 flex items-center text-xs font-medium text-emerald-300">
              <TrendingUp className="mr-1 size-3" /> +24 minggu ini
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-sky-100/80">
              Kategori EV / Hybrid
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
              <Fuel className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">412</div>
            <p className="mt-1 text-xs text-sky-100/70">
              22.3% dari total armada
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-sky-100/80">
              Pengguna Aktif
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
              <Users className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8,920</div>
            <p className="mt-1 flex items-center text-xs font-medium text-emerald-300">
              <TrendingUp className="mr-1 size-3" /> +12% bulan ini
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-sky-100/80">
              Pencarian Spesifikasi
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
              <Gauge className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">34.2K</div>
            <p className="mt-1 text-xs text-sky-100/70">Rata-rata 1.1k/hari</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Section: Traffic Analytics & Recent Entries */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column (Chart/Activity Overview) */}
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold">
                  Statistik Input Data Kendaraan
                </CardTitle>
                <CardDescription>
                  Aktivitas entri katalog oleh tim verifikator minggu ini
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="bg-emerald-50 text-emerald-700"
              >
                +18% Target Reached
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Visual Bar Chart Simplicity */}
            <div className="mt-4 flex h-48 items-end gap-3 rounded-lg border bg-muted/20 p-4">
              {[
                { day: "Sen", val: 40, label: "40 unit" },
                { day: "Sel", val: 65, label: "65 unit" },
                { day: "Rab", val: 50, label: "50 unit" },
                { day: "Kam", val: 85, label: "85 unit" },
                { day: "Jum", val: 70, label: "70 unit" },
                { day: "Sab", val: 95, label: "95 unit" },
                { day: "Min", val: 60, label: "60 unit" },
              ].map((item, index) => (
                <div
                  key={item.day}
                  className="group relative flex-1 flex flex-col items-center h-full justify-end"
                >
                  <div
                    style={{ height: `${item.val}%` }}
                    className={`w-full rounded-t-md transition-all duration-300 ${
                      index === 5
                        ? "bg-sky-400"
                        : "bg-sky-500/40 hover:bg-sky-400/70"
                    }`}
                  />
                  <span className="mt-2 text-[10px] font-medium text-sky-100/80">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between border-t border-slate-700 pt-4 text-xs text-sky-100/80">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-sky-400" /> Hari Puncak
                (Sabtu)
              </span>
              <span>Total Minggu Ini: 465 Mobil Dikurasi</span>
            </div>
          </CardContent>
        </Card>

        {/* Right Column (Aksi Cepat Admin & Notifikasi) */}
        <div className="space-y-6">
          <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-white">
                Manajemen Cepat
              </CardTitle>
              <CardDescription className="text-sky-100/70">
                Akses fitur prioritas admin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-between border-sky-500/40 bg-slate-950 text-sky-100 hover:bg-sky-500/10 hover:text-white text-xs font-normal"
              >
                Verifikasi Pengajuan User{" "}
                <ArrowUpRight className="size-3.5 text-sky-300" />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-between border-sky-500/40 bg-slate-950 text-sky-100 hover:bg-sky-500/10 hover:text-white text-xs font-normal"
              >
                Update Harga Pasar Terbaru{" "}
                <ArrowUpRight className="size-3.5 text-sky-300" />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-between border-sky-500/40 bg-slate-950 text-sky-100 hover:bg-sky-500/10 hover:text-white text-xs font-normal"
              >
                Ekspor Laporan Database (CSV){" "}
                <ArrowUpRight className="size-3.5 text-sky-300" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-sky-500/30 bg-sky-950/80 text-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <Badge className="border-sky-300/40 bg-sky-500/15 text-sky-100 hover:bg-sky-500/15">
                  System Status
                </Badge>
                <span className="flex size-2 rounded-full bg-emerald-400" />
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">
                API Sync Aktif
              </h3>
              <p className="mt-1 text-xs text-sky-100/80">
                Sinkronisasi data manufaktur (BMW, Porsche, Tesla) berjalan
                normal tanpa kendala.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Added Cars Table / List */}
      <Card className="border-border/60 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">
              Katalog Mobil Terbaru Masuk
            </CardTitle>
            <CardDescription>
              Daftar mobil yang baru ditambahkan ke sistem
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-indigo-600 hover:text-indigo-700"
          >
            Lihat Semua
          </Button>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {[
              {
                name: "Porsche 911 GT3 RS (2024)",
                cat: "Petrol",
                hp: "525 HP",
                status: "Published",
                time: "10 min lalu",
              },
              {
                name: "Hyundai Ioniq 5 N",
                cat: "EV",
                hp: "641 HP",
                status: "Published",
                time: "1 jam lalu",
              },
              {
                name: "BMW M2 Coupe",
                cat: "Petrol",
                hp: "453 HP",
                status: "Draft",
                time: "3 jam lalu",
              },
              {
                name: "Toyota Prius HEV",
                cat: "Hybrid",
                hp: "220 HP",
                status: "Review",
                time: "5 jam lalu",
              },
            ].map((car) => (
              <div
                key={car.name}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted font-bold text-xs">
                    🚘
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {car.name}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{car.cat}</span> • <span>{car.hp}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden text-xs text-muted-foreground sm:inline-block">
                    <Clock className="mr-1 inline size-3" /> {car.time}
                  </span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      car.status === "Published"
                        ? "border-emerald-500/30 bg-emerald-50 text-emerald-700"
                        : car.status === "Review"
                          ? "border-amber-500/30 bg-amber-50 text-amber-700"
                          : "border-slate-500/30 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {car.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreVertical className="size-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
