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
    <div className="space-y-6 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge
            variant="outline"
            className="border-violet-500/30 bg-violet-50 text-violet-700"
          >
            <Activity className="mr-1 size-3" /> Analytics
          </Badge>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Analisis Performa
          </h1>
          <p className="text-sm text-muted-foreground">
            Pantau performa operasional, pertumbuhan penjualan, dan efektivitas
            katalog.
          </p>
        </div>

        <Button size="sm" className="gap-2 bg-violet-600 hover:bg-violet-500">
          <TrendingUp className="size-4" /> Lihat Laporan
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {performanceData.map((item) => (
          <Card key={item.label} className="border-border/60 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2">
                <span className="text-2xl font-bold">{item.value}</span>
                <span className="text-xs font-medium text-emerald-600">
                  {item.delta}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold">
                  Trend Kinerja Mingguan
                </CardTitle>
                <CardDescription>
                  Performa katalog mobil dalam 8 pekan terakhir
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="bg-emerald-50 text-emerald-700"
              >
                +18.5%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex h-56 items-end gap-3 rounded-xl border bg-muted/20 p-4">
              {chartBars.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center justify-end gap-2"
                >
                  <div
                    className={`w-full rounded-t-md ${index % 2 === 0 ? "bg-violet-500" : "bg-violet-300"}`}
                    style={{ height: `${value}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    W{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Ringkasan Motor
            </CardTitle>
            <CardDescription>Indikator prioritas saat ini</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-violet-50 p-3">
              <div className="flex items-center gap-2 text-violet-700">
                <Gauge className="size-4" />
                <span className="font-medium">Tingkat Analisis</span>
              </div>
              <p className="mt-2 text-2xl font-bold">82/100</p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-3">
              <div className="flex items-center gap-2 text-emerald-700">
                <Zap className="size-4" />
                <span className="font-medium">Efisiensi Operasional</span>
              </div>
              <p className="mt-2 text-2xl font-bold">89%</p>
            </div>

            <Button
              variant="outline"
              className="w-full justify-between text-sm"
            >
              Export laporan <ArrowUpRight className="size-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
