import { Activity, ArrowUpRight, Gauge, TrendingUp, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const performanceData = [
  { label: "Akurasi Penjualan", value: "94%", delta: "+6.2%" },
  { label: "Kepuasan User", value: "91%", delta: "+4.8%" },
  { label: "Retensi Mobil", value: "88%", delta: "+3.4%" },
  { label: "Lead Conversion", value: "67%", delta: "+9.1%" },
];

const chartBars = [52, 64, 58, 80, 77, 92, 86, 98];

export default function PerformaAnalytic() {
  return (
    <div className="space-y-6 rounded-2xl border border-sky-500/20 bg-slate-950/80 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-slate-700 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge
            variant="outline"
            className="border-violet-400/40 bg-violet-950/60 text-violet-200"
          >
            <Activity className="mr-1 size-3 text-violet-300" /> Analytics
          </Badge>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Analisis Performa
          </h1>
          <p className="text-sm text-sky-100/75">
            Pantau performa operasional, pertumbuhan penjualan, dan efektivitas
            katalog.
          </p>
        </div>

        <Button
          size="sm"
          className="gap-2 bg-violet-500 text-white hover:bg-violet-400"
        >
          <TrendingUp className="size-4" /> Lihat Laporan
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {performanceData.map((item) => (
          <Card
            key={item.label}
            className="border-slate-700 bg-slate-900/80 shadow-sm"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-sky-100/80">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2">
                <span className="text-2xl font-bold text-white">
                  {item.value}
                </span>
                <span className="text-xs font-medium text-emerald-300">
                  {item.delta}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-slate-700 bg-slate-900/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Trend Kinerja Mingguan
                </CardTitle>
                <CardDescription className="text-sky-100/70">
                  Performa katalog mobil dalam 8 pekan terakhir
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
              >
                +18.5%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex h-56 items-end gap-3 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              {chartBars.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center justify-end gap-2"
                >
                  <div
                    className={`w-full rounded-t-md ${index % 2 === 0 ? "bg-cyan-400" : "bg-violet-400"}`}
                    style={{ height: `${value}%` }}
                  />
                  <span className="text-[10px] text-sky-100/80">
                    W{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-white">
              Ringkasan Motor
            </CardTitle>
            <CardDescription className="text-sky-100/70">
              Indikator prioritas saat ini
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-violet-400/30 bg-violet-500/10 p-3 text-violet-100">
              <div className="flex items-center gap-2 text-violet-200">
                <Gauge className="size-4" />
                <span className="font-medium">Tingkat Analisis</span>
              </div>
              <p className="mt-2 text-2xl font-bold text-white">82/100</p>
            </div>

            <div className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-3 text-emerald-100">
              <div className="flex items-center gap-2 text-emerald-200">
                <Zap className="size-4" />
                <span className="font-medium">Efisiensi Operasional</span>
              </div>
              <p className="mt-2 text-2xl font-bold text-white">89%</p>
            </div>

            <Button
              variant="outline"
              className="w-full justify-between border-cyan-400/40 bg-slate-950 text-cyan-100 hover:bg-sky-500/10 hover:text-white text-sm"
            >
              Export laporan <ArrowUpRight className="size-4 text-cyan-300" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
