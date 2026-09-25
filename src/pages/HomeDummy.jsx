import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "Porsche 911 GT3 RS",
    desc: "Performa murni trek balap dengan aerodinamika ekstrem.",
    img: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    title: "Tesla Model S Plaid",
    desc: "Akselerasi instan 0-100 km/jam dalam 2.1 detik.",
    img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    title: "BMW M4 Competition",
    desc: "Kombinasi kemewahan dan performa mesin TwinPower Turbo.",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const FALLBACK_CAR_IMAGE =
  "https://images.pexels.com/photos/127405/pexels-photo-127405.jpeg?auto=compress&cs=tinysrgb&w=1600";

const CAR_DATABASE = [
  {
    name: "Bugatti Chiron",
    category: "Petrol",
    hp: "1479 HP",
    speed: "420 km/h",
    price: "Rp 115 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG GT R",
    category: "Petrol",
    hp: "577 HP",
    speed: "318 km/h",
    price: "Rp 7.5 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche 911 GT3 RS",
    category: "Petrol",
    hp: "518 HP",
    speed: "296 km/h",
    price: "Rp 12 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG GT 63 PRO",
    category: "Petrol",
    hp: "604 HP",
    speed: "317 km/h",
    price: "Rp 11 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Chevrolet Camaro SS 1LE",
    category: "Petrol",
    hp: "455 HP",
    speed: "290 km/h",
    price: "Rp 2.3 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Audi R8 V10 Performance",
    category: "Petrol",
    hp: "612 HP",
    speed: "331 km/h",
    price: "Rp 8.5 M",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nissan GT-R Nismo",
    category: "Petrol",
    hp: "600 HP",
    speed: "330 km/h",
    price: "Rp 8.5 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ford GT",
    category: "Petrol",
    hp: "660 HP",
    speed: "347 km/h",
    price: "Rp 25 M",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "McLaren 765LT",
    category: "Petrol",
    hp: "755 HP",
    speed: "330 km/h",
    price: "Rp 14 M",
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari F8 Tributo",
    category: "Petrol",
    hp: "710 HP",
    speed: "340 km/h",
    price: "Rp 11 M",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Huracan EVO",
    category: "Petrol",
    hp: "631 HP",
    speed: "325 km/h",
    price: "Rp 10.5 M",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aston Martin Vantage",
    category: "Petrol",
    hp: "656 HP",
    speed: "325 km/h",
    price: "Rp 7 M",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Chevrolet Corvette Z06",
    category: "Petrol",
    hp: "670 HP",
    speed: "313 km/h",
    price: "Rp 5 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW M4 CSL",
    category: "Petrol",
    hp: "543 HP",
    speed: "307 km/h",
    price: "Rp 4.8 M",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Jaguar F-Type R",
    category: "Petrol",
    hp: "575 HP",
    speed: "300 km/h",
    price: "Rp 3.8 M",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lexus LFA",
    category: "Petrol",
    hp: "553 HP",
    speed: "326 km/h",
    price: "Rp 20 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Aventador SVJ",
    category: "Petrol",
    hp: "759 HP",
    speed: "352 km/h",
    price: "Rp 22 M",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche 911 Turbo S",
    category: "Petrol",
    hp: "640 HP",
    speed: "330 km/h",
    price: "Rp 11.5 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "McLaren 720S",
    category: "Petrol",
    hp: "710 HP",
    speed: "341 km/h",
    price: "Rp 10.5 M",
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari 812 Superfast",
    category: "Petrol",
    hp: "789 HP",
    speed: "340 km/h",
    price: "Rp 13.5 M",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Maserati MC20",
    category: "Petrol",
    hp: "621 HP",
    speed: "325 km/h",
    price: "Rp 9 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dodge Challenger SRT Hellcat",
    category: "Petrol",
    hp: "717 HP",
    speed: "320 km/h",
    price: "Rp 3.5 M",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ford Mustang Shelby GT500",
    category: "Petrol",
    hp: "760 HP",
    speed: "290 km/h",
    price: "Rp 3.8 M",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Alfa Romeo Giulia GTA",
    category: "Petrol",
    hp: "533 HP",
    speed: "300 km/h",
    price: "Rp 4.5 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aston Martin DBS Superleggera",
    category: "Petrol",
    hp: "715 HP",
    speed: "340 km/h",
    price: "Rp 12 M",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lotus Emira V6",
    category: "Petrol",
    hp: "400 HP",
    speed: "290 km/h",
    price: "Rp 2.8 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW M2 CS",
    category: "Petrol",
    hp: "444 HP",
    speed: "280 km/h",
    price: "Rp 3.2 M",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Toyota GR Supra 3.0",
    category: "Petrol",
    hp: "382 HP",
    speed: "250 km/h",
    price: "Rp 2.2 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Alpine A110 R",
    category: "Petrol",
    hp: "296 HP",
    speed: "285 km/h",
    price: "Rp 2.4 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pagani Huayra BC",
    category: "Petrol",
    hp: "745 HP",
    speed: "383 km/h",
    price: "Rp 65 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Koenigsegg Jesko",
    category: "Petrol",
    hp: "1600 HP",
    speed: "482 km/h",
    price: "Rp 95 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bentley Continental GT Speed",
    category: "Petrol",
    hp: "650 HP",
    speed: "335 km/h",
    price: "Rp 10.5 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche Taycan GTS",
    category: "EV",
    hp: "598 HP",
    speed: "250 km/h",
    price: "Rp 4.5 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hyundai Ioniq 5 N",
    category: "EV",
    hp: "650 HP",
    speed: "260 km/h",
    price: "Rp 1.4 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lotus Emeya R",
    category: "EV",
    hp: "905 HP",
    speed: "256 km/h",
    price: "Rp 4.8 M",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW i4 M50",
    category: "EV",
    hp: "544 HP",
    speed: "225 km/h",
    price: "Rp 2.1 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rimac Nevera",
    category: "EV",
    hp: "1914 HP",
    speed: "412 km/h",
    price: "Rp 60 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche Taycan Turbo GT",
    category: "EV",
    hp: "1092 HP",
    speed: "305 km/h",
    price: "Rp 6.5 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tesla Model S Plaid",
    category: "EV",
    hp: "1020 HP",
    speed: "322 km/h",
    price: "Rp 4.2 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lotus Evija",
    category: "EV",
    hp: "2011 HP",
    speed: "350 km/h",
    price: "Rp 50 M",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Audi RS e-tron GT",
    category: "EV",
    hp: "637 HP",
    speed: "250 km/h",
    price: "Rp 3.2 M",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lucid Air Sapphire",
    category: "EV",
    hp: "1234 HP",
    speed: "330 km/h",
    price: "Rp 6.8 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Maserati GranTurismo Folgore",
    category: "EV",
    hp: "751 HP",
    speed: "325 km/h",
    price: "Rp 5.2 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pininfarina Battista",
    category: "EV",
    hp: "1900 HP",
    speed: "350 km/h",
    price: "Rp 55 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Polestar 5",
    category: "EV",
    hp: "884 HP",
    speed: "250 km/h",
    price: "Rp 3.5 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "MG Cyberster GT",
    category: "EV",
    hp: "503 HP",
    speed: "200 km/h",
    price: "Rp 1.7 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kia EV6 GT",
    category: "EV",
    hp: "576 HP",
    speed: "260 km/h",
    price: "Rp 1.3 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG EQE 53",
    category: "EV",
    hp: "677 HP",
    speed: "240 km/h",
    price: "Rp 3.8 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG EQS 53",
    category: "EV",
    hp: "751 HP",
    speed: "250 km/h",
    price: "Rp 4.1 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lotus Eletre R",
    category: "EV",
    hp: "905 HP",
    speed: "265 km/h",
    price: "Rp 4.2 M",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BYD Yangwang U9",
    category: "EV",
    hp: "1300 HP",
    speed: "309 km/h",
    price: "Rp 4.5 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tesla Roadster (Gen 2)",
    category: "EV",
    hp: "1500 HP",
    speed: "400 km/h",
    price: "Rp 6.0 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW i5 M60",
    category: "EV",
    hp: "593 HP",
    speed: "230 km/h",
    price: "Rp 2.8 M",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Zeekr 001 FR",
    category: "EV",
    hp: "1265 HP",
    speed: "280 km/h",
    price: "Rp 3.5 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Genesis Electrified G80 Sport",
    category: "EV",
    hp: "365 HP",
    speed: "225 km/h",
    price: "Rp 2.3 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ford Mustang Mach-E GT",
    category: "EV",
    hp: "480 HP",
    speed: "200 km/h",
    price: "Rp 2.1 M",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Abarth 500e Sport",
    category: "EV",
    hp: "153 HP",
    speed: "155 km/h",
    price: "Rp 1.1 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Alpine A290 GTS",
    category: "EV",
    hp: "217 HP",
    speed: "170 km/h",
    price: "Rp 1.2 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "CUPRA Born VZ",
    category: "EV",
    hp: "322 HP",
    speed: "200 km/h",
    price: "Rp 1.2 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nio EP9",
    category: "EV",
    hp: "1341 HP",
    speed: "313 km/h",
    price: "Rp 30 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aspark Owl",
    category: "EV",
    hp: "1984 HP",
    speed: "413 km/h",
    price: "Rp 65 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Deus Vayanne",
    category: "EV",
    hp: "2243 HP",
    speed: "400 km/h",
    price: "Rp 50 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Polestar 6 LA Concept",
    category: "EV",
    hp: "884 HP",
    speed: "250 km/h",
    price: "Rp 4.0 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tesla Model 3 Performance",
    category: "EV",
    hp: "510 HP",
    speed: "262 km/h",
    price: "Rp 1.7 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari 296 GTB",
    category: "Hybrid",
    hp: "830 HP",
    speed: "330 km/h",
    price: "Rp 11.5 M",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "McLaren Artura",
    category: "Hybrid",
    hp: "680 HP",
    speed: "330 km/h",
    price: "Rp 8.5 M",
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche Panamera 4 E-Hybrid",
    category: "Hybrid",
    hp: "470 HP",
    speed: "280 km/h",
    price: "Rp 4.5 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Chevrolet Corvette E-Ray",
    category: "Hybrid",
    hp: "655 HP",
    speed: "300 km/h",
    price: "Rp 4.2 M",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Revuelto",
    category: "Hybrid",
    hp: "1001 HP",
    speed: "350 km/h",
    price: "Rp 20 M",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari SF90 Stradale",
    category: "Hybrid",
    hp: "986 HP",
    speed: "340 km/h",
    price: "Rp 18 M",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG GT 63 S E Performance",
    category: "Hybrid",
    hp: "831 HP",
    speed: "316 km/h",
    price: "Rp 8.8 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW XM Label Red",
    category: "Hybrid",
    hp: "738 HP",
    speed: "290 km/h",
    price: "Rp 6.2 M",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Honda NSX Type S",
    category: "Hybrid",
    hp: "600 HP",
    speed: "307 km/h",
    price: "Rp 6.5 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "McLaren P1",
    category: "Hybrid",
    hp: "903 HP",
    speed: "350 km/h",
    price: "Rp 30 M",
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche 918 Spyder",
    category: "Hybrid",
    hp: "887 HP",
    speed: "345 km/h",
    price: "Rp 35 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari LaFerrari",
    category: "Hybrid",
    hp: "950 HP",
    speed: "350 km/h",
    price: "Rp 50 M",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Koenigsegg Regera",
    category: "Hybrid",
    hp: "1500 HP",
    speed: "404 km/h",
    price: "Rp 70 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aston Martin Valhalla",
    category: "Hybrid",
    hp: "998 HP",
    speed: "350 km/h",
    price: "Rp 22 M",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Sián FKP 37",
    category: "Hybrid",
    hp: "808 HP",
    speed: "355 km/h",
    price: "Rp 45 M",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG ONE",
    category: "Hybrid",
    hp: "1049 HP",
    speed: "352 km/h",
    price: "Rp 60 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche 911 GTS T-Hybrid (992.2)",
    category: "Hybrid",
    hp: "534 HP",
    speed: "312 km/h",
    price: "Rp 6.8 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Temerario",
    category: "Hybrid",
    hp: "907 HP",
    speed: "340 km/h",
    price: "Rp 14 M",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "McLaren W1",
    category: "Hybrid",
    hp: "1258 HP",
    speed: "350 km/h",
    price: "Rp 40 M",
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW M5 (G90 PHEV)",
    category: "Hybrid",
    hp: "717 HP",
    speed: "305 km/h",
    price: "Rp 4.8 M",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG C 63 S E Performance",
    category: "Hybrid",
    hp: "671 HP",
    speed: "280 km/h",
    price: "Rp 3.5 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG SL 63 S E Performance",
    category: "Hybrid",
    hp: "805 HP",
    speed: "317 km/h",
    price: "Rp 7.2 M",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lexus LC 500h",
    category: "Hybrid",
    hp: "354 HP",
    speed: "250 km/h",
    price: "Rp 3.6 M",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Polestar 1",
    category: "Hybrid",
    hp: "609 HP",
    speed: "250 km/h",
    price: "Rp 3.2 M",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW i8 Ultimate Sophisto",
    category: "Hybrid",
    hp: "369 HP",
    speed: "250 km/h",
    price: "Rp 2.8 M",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari Speedster SP2 (HEV)",
    category: "Hybrid",
    hp: "799 HP",
    speed: "300 km/h",
    price: "Rp 32 M",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Koenigsegg Gemera (TNG V8 PHEV)",
    category: "Hybrid",
    hp: "2300 HP",
    speed: "400 km/h",
    price: "Rp 45 M",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche Cayenne Turbo E-Hybrid",
    category: "Hybrid",
    hp: "729 HP",
    speed: "295 km/h",
    price: "Rp 4.8 M",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bentley Continental GT Speed PHEV",
    category: "Hybrid",
    hp: "771 HP",
    speed: "335 km/h",
    price: "Rp 11.8 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bentley Flying Spur Hybrid",
    category: "Hybrid",
    hp: "536 HP",
    speed: "285 km/h",
    price: "Rp 9.5 M",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aston Martin Valour (Hybrid Mild)",
    category: "Hybrid",
    hp: "705 HP",
    speed: "322 km/h",
    price: "Rp 18 M",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Urus SE (PHEV)",
    category: "Hybrid",
    hp: "789 HP",
    speed: "312 km/h",
    price: "Rp 11 M",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomeDummy() {
  const [slide, setSlide] = useState(0);
  const [fuelFilter, setFuelFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  const filteredCars = CAR_DATABASE.filter(
    (car) => fuelFilter === "All" || car.category === fuelFilter,
  );

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
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Carousel Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
          <div className="relative h-90 w-full">
            <img
              src={CAROUSEL_SLIDES[slide].img}
              alt="Featured Car"
              className="h-full w-full object-cover opacity-50 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-md">
              <Badge className="mb-2 bg-indigo-600">Featured Car</Badge>
              <h2 className="text-3xl font-bold">
                {CAROUSEL_SLIDES[slide].title}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                {CAROUSEL_SLIDES[slide].desc}
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              setSlide(
                (slide - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-2 hover:bg-slate-800"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setSlide((slide + 1) % CAROUSEL_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-2 hover:bg-slate-800"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Filter and View Toggles */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            {["All", "Petrol", "EV", "Hybrid"].map((type) => (
              <Button
                key={type}
                size="sm"
                variant={fuelFilter === type ? "default" : "outline"}
                onClick={() => setFuelFilter(type)}
                className={
                  fuelFilter === type
                    ? "bg-indigo-600"
                    : "border-slate-700 text-slate-300"
                }
              >
                {type}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-slate-900 p-1 border border-slate-800">
            <Button
              size="icon"
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              onClick={() => setViewMode("grid")}
              className="size-8"
            >
              <LayoutGrid size={16} />
            </Button>
            <Button
              size="icon"
              variant={viewMode === "list" ? "secondary" : "ghost"}
              onClick={() => setViewMode("list")}
              className="size-8"
            >
              <List size={16} />
            </Button>
          </div>
        </div>

        <div
          className={`mt-6 gap-4 ${viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-4" : "flex flex-col"}`}
        >
          {filteredCars.map((car) => (
            <Card
              key={car.name}
              className="overflow-hidden border-slate-800 bg-slate-900 text-white shadow-lg shadow-slate-950/20"
            >
              <CardContent className="p-0">
                <img
                  src={car.img}
                  alt={car.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = FALLBACK_CAR_IMAGE;
                  }}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-slate-700 text-indigo-400"
                    >
                      {car.category}
                    </Badge>
                    <span className="text-xs text-slate-400">{car.price}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-lg">{car.name}</h3>
                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>Tenaga: {car.hp}</span>
                    <span>Top Speed: {car.speed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
