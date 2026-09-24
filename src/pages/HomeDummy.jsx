import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight, LayoutGrid, List, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CAROUSEL_SLIDES = [
  { id: 1, title: "Porsche 911 GT3 RS", desc: "Performa murni trek balap dengan aerodinamika ekstrem.", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1000&q=80" },
  { id: 2, title: "Tesla Model S Plaid", desc: "Akselerasi instan 0-100 km/jam dalam 2.1 detik.", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1000&q=80" },
  { id: 3, title: "BMW M4 Competition", desc: "Kombinasi kemewahan dan performa mesin TwinPower Turbo.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1000&q=80" },
];

const CAR_DATABASE = [
  { name: "Porsche 911 GT3", category: "Petrol", hp: "525 HP", speed: "318 km/h", price: "Rp 6.5 M" },
  { name: "Tesla Model S", category: "EV", hp: "1,020 HP", speed: "322 km/h", price: "Rp 3.8 M" },
  { name: "BMW M4 Comp", category: "Petrol", hp: "510 HP", speed: "290 km/h", price: "Rp 2.6 M" },
  { name: "Ferrari SF90", category: "Hybrid", hp: "1,000 HP", speed: "340 km/h", price: "Rp 12.0 M" },
];

export default function HomeDummy() {
  const [slide, setSlide] = useState(0);
  const [fuelFilter, setFuelFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredCars = CAR_DATABASE.filter(car => fuelFilter === "All" || car.category === fuelFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="size-4" />
            </span>
            AutoBase
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/signin">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Carousel Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
          <div className="relative h-90 w-full">
            <img src={CAROUSEL_SLIDES[slide].img} alt="Featured Car" className="h-full w-full object-cover opacity-50 transition-all duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-md">
              <Badge className="mb-2 bg-indigo-600">Featured Car</Badge>
              <h2 className="text-3xl font-bold">{CAROUSEL_SLIDES[slide].title}</h2>
              <p className="mt-1 text-sm text-slate-300">{CAROUSEL_SLIDES[slide].desc}</p>
            </div>
          </div>
          <button onClick={() => setSlide((slide - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-2 hover:bg-slate-800">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setSlide((slide + 1) % CAROUSEL_SLIDES.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-2 hover:bg-slate-800">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Filter and View Toggles */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            {["All", "Petrol", "EV", "Hybrid"].map((type) => (
              <Button key={type} size="sm" variant={fuelFilter === type ? "default" : "outline"} onClick={() => setFuelFilter(type)} className={fuelFilter === type ? "bg-indigo-600" : "border-slate-700 text-slate-300"}>
                {type}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-slate-900 p-1 border border-slate-800">
            <Button size="icon" variant={viewMode === "grid" ? "secondary" : "ghost"} onClick={() => setViewMode("grid")} className="size-8">
              <LayoutGrid size={16} />
            </Button>
            <Button size="icon" variant={viewMode === "list" ? "secondary" : "ghost"} onClick={() => setViewMode("list")} className="size-8">
              <List size={16} />
            </Button>
          </div>
        </div>

        <div className={`mt-6 gap-4 ${viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-4" : "flex flex-col"}`}>
          {filteredCars.map((car) => (
            <Card key={car.name} className="border-slate-800 bg-slate-900 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-slate-700 text-indigo-400">{car.category}</Badge>
                  <span className="text-xs text-slate-400">{car.price}</span>
                </div>
                <h3 className="mt-3 font-semibold text-lg">{car.name}</h3>
                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>Tenaga: {car.hp}</span>
                  <span>Top Speed: {car.speed}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}