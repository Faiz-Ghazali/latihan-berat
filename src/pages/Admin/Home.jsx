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
    <div className="space-y-8 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      {/* Top Header / Banner Admin */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-indigo-500/30 bg-indigo-50 text-indigo-700"
            >
              <ShieldCheck className="mr-1 size-3" /> Admin Portal
            </Badge>
            <span className="text-xs text-muted-foreground">AutoBase v2.4</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Overview Database Mobil
          </h1>
          <p className="text-sm text-muted-foreground">
            Kelola katalog kendaraan, pantau statistik pengguna, dan atur
            pembaruan spesifikasi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Search className="size-4" /> Cari Data
          </Button>
          <Button size="sm" className="gap-2 bg-indigo-600 hover:bg-indigo-500">
            <Plus className="size-4" /> Tambah Mobil Baru
          </Button>
        </div>
      </div>

      {/* Grid Quick Stats Metric */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total Mobil Terdaftar
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Car className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,842</div>
            <p className="mt-1 flex items-center text-xs text-emerald-600 font-medium">
              <TrendingUp className="mr-1 size-3" /> +24 minggu ini
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Kategori EV / Hybrid
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Fuel className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">412</div>
            <p className="mt-1 text-xs text-muted-foreground">
              22.3% dari total armada
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Pengguna Aktif
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Users className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,920</div>
            <p className="mt-1 flex items-center text-xs text-emerald-600 font-medium">
              <TrendingUp className="mr-1 size-3" /> +12% bulan ini
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Pencarian Spesifikasi
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Gauge className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34.2K</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Rata-rata 1.1k/hari
            </p>
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
                        ? "bg-indigo-600"
                        : "bg-primary/20 hover:bg-primary/40"
                    }`}
                  />
                  <span className="mt-2 text-[10px] font-medium text-muted-foreground">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between text-xs text-muted-foreground border-t pt-4">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-indigo-600" /> Hari
                Puncak (Sabtu)
              </span>
              <span>Total Minggu Ini: 465 Mobil Dikurasi</span>
            </div>
          </CardContent>
        </Card>

        {/* Right Column (Aksi Cepat Admin & Notifikasi) */}
        <div className="space-y-6">
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">
                Manajemen Cepat
              </CardTitle>
              <CardDescription>Akses fitur prioritas admin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-between text-xs font-normal"
              >
                Verifikasi Pengajuan User{" "}
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-between text-xs font-normal"
              >
                Update Harga Pasar Terbaru{" "}
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-between text-xs font-normal"
              >
                Ekspor Laporan Database (CSV){" "}
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm bg-indigo-950 text-white">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <Badge className="bg-indigo-500/30 text-indigo-200 hover:bg-indigo-500/30">
                  System Status
                </Badge>
                <span className="flex size-2 rounded-full bg-emerald-400" />
              </div>
              <h3 className="mt-3 text-lg font-bold">API Sync Aktif</h3>
              <p className="mt-1 text-xs text-indigo-200">
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
