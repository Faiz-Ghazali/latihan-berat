import {
  CarFront,
  CircleCheckBig,
  MapPin,
  Plus,
  ShieldCheck,
  Wrench,
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

const garageCars = [
  {
    name: "Tesla Model Y",
    status: "Ready",
    mileage: "12.400 km",
    location: "Jakarta Selatan",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "BMW M2 Coupe",
    status: "Maintenance",
    mileage: "8.320 km",
    location: "Bandung",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Porsche 911 GT3 RS",
    status: "Booked",
    mileage: "4.950 km",
    location: "Surabaya",
    accent: "bg-sky-50 text-sky-700 border-sky-200",
  },
];

export default function MyGarage() {
  return (
    <div className="space-y-6 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-50 text-emerald-700"
          >
            <CarFront className="mr-1 size-3" /> My Garage
          </Badge>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Garasi Saya
          </h1>
          <p className="text-sm text-muted-foreground">
            Pantau kondisi kendaraan, status pemesanan, dan jadwal perawatan
            mobil Anda.
          </p>
        </div>

        <Button size="sm" className="gap-2 bg-emerald-600 hover:bg-emerald-500">
          <Plus className="size-4" /> Tambah Mobil
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Total Kendaraan</p>
            <div className="mt-2 text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Siap Dipakai</p>
            <div className="mt-2 text-2xl font-bold">17</div>
          </CardContent>
        </Card>
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Perawatan</p>
            <div className="mt-2 text-2xl font-bold">5</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {garageCars.map((car) => (
          <Card key={car.name} className="border-border/60 shadow-sm">
            <div className="h-32 bg-gradient-to-br from-emerald-100 via-white to-slate-100 p-4">
              <div className="flex h-full items-start justify-between">
                <div className="rounded-full bg-white/80 p-2 text-slate-700">
                  <CarFront className="size-5" />
                </div>
                <Badge className={`border ${car.accent}`}>{car.status}</Badge>
              </div>
            </div>
            <CardContent className="space-y-4 p-4">
              <div>
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-sm text-muted-foreground">{car.mileage}</p>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-slate-500" />
                  <span>{car.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  <span>Dokumen lengkap dan aman</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="size-4 text-amber-600" />
                  <span>Servis berikutnya dalam 2 minggu</span>
                </div>
              </div>

              <Button variant="outline" className="w-full justify-between">
                Detail Mobil <CircleCheckBig className="size-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
