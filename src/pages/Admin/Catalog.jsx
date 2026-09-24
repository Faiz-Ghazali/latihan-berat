import {
  Car,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Star,
  Filter,
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

const cars = [
  {
    name: "Porsche 911 GT3 RS",
    type: "Sports",
    year: "2024",
    price: "Rp 3,8 M",
    rating: 4.9,
    fuel: "Petrol",
    stock: "Ready Stock",
  },
  {
    name: "Toyota GR Supra",
    type: "Coupe",
    year: "2023",
    price: "Rp 1,9 M",
    rating: 4.8,
    fuel: "Petrol",
    stock: "Limited",
  },
  {
    name: "Tesla Model Y",
    type: "Electric",
    year: "2024",
    price: "Rp 1,2 M",
    rating: 4.7,
    fuel: "Electric",
    stock: "Ready Stock",
  },
  {
    name: "BMW M2 Coupe",
    type: "Performance",
    year: "2022",
    price: "Rp 2,1 M",
    rating: 4.8,
    fuel: "Petrol",
    stock: "Trending",
  },
];

export default function Catalog() {
  return (
    <div className="space-y-6 rounded-2xl border border-sky-500/20 bg-slate-950/80 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-slate-700 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge
            variant="outline"
            className="border-cyan-400/40 bg-cyan-950/60 text-cyan-200"
          >
            <Car className="mr-1 size-3 text-cyan-300" /> Catalog
          </Badge>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Katalog Mobil
          </h1>
          <p className="text-sm text-sky-100/75">
            Jelajahi kendaraan unggulan dan pilih mobil sesuai kebutuhan Anda.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-sky-500/40 bg-slate-900 text-sky-100 hover:bg-sky-500/10 hover:text-white"
          >
            <Filter className="size-4 text-sky-300" /> Filter
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-cyan-500 text-white hover:bg-cyan-400"
          >
            <Search className="size-4" /> Cari Mobil
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-sky-100/70">Total Unit</p>
            <div className="mt-2 text-2xl font-bold text-white">248</div>
          </CardContent>
        </Card>
        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-sky-100/70">Ready Stock</p>
            <div className="mt-2 text-2xl font-bold text-white">162</div>
          </CardContent>
        </Card>
        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-sky-100/70">EV</p>
            <div className="mt-2 text-2xl font-bold text-white">34</div>
          </CardContent>
        </Card>
        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardContent className="p-4">
            <p className="text-xs text-sky-100/70">Trending</p>
            <div className="mt-2 text-2xl font-bold text-white">18</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Pilihan Mobil Populer
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Cari model atau tipe mobil"
              className="max-w-sm border-slate-600 bg-slate-950 text-sky-50 placeholder:text-slate-400"
            />
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 bg-slate-950 text-sky-200 hover:bg-sky-500/10 hover:text-white"
            >
              <SlidersHorizontal className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {cars.map((car) => (
            <Card
              key={car.name}
              className="overflow-hidden border-slate-700 bg-slate-900/80 shadow-sm"
            >
              <div className="h-40 bg-gradient-to-br from-sky-900 via-slate-800 to-blue-950 p-4">
                <div className="flex h-full items-start justify-between">
                  <div className="rounded-full bg-sky-500/20 px-2 py-1 text-[10px] font-medium text-sky-100">
                    {car.type}
                  </div>
                  <Badge
                    variant="secondary"
                    className="border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                  >
                    {car.stock}
                  </Badge>
                </div>
              </div>
              <CardContent className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {car.name}
                    </h3>
                    <p className="text-sm text-sky-100/70">
                      {car.year} • {car.fuel}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="size-4 fill-current" />
                    <span className="text-sm font-medium text-sky-100">
                      {car.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-sky-100/70">Harga mulai</p>
                    <p className="text-xl font-bold text-white">{car.price}</p>
                  </div>
                  <Button
                    size="sm"
                    className="gap-1 bg-cyan-500 text-white hover:bg-cyan-400"
                  >
                    Detail <ArrowUpRight className="size-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
