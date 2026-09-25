import { useState } from "react";
import { User, Heart, Mail, MapPin, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UserForm() {
  const [formData, setFormData] = useState({
    nama: "",
    hobi: "",
    email: "",
    alamat: "",
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <Card className="mx-auto w-full max-w-xl border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Data Diri Pengguna</CardTitle>
        <CardDescription>
          Isi informasi profil Anda untuk pengalaman database mobil yang personal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSaved && (
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-50 p-3 text-xs font-medium text-emerald-700">
            <CheckCircle className="size-4 shrink-0" />
            Data berhasil disimpan!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Nama */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <User className="size-3.5 text-muted-foreground" /> Nama Lengkap
            </label>
            <Input
              type="text"
              name="nama"
              placeholder="Contoh: Budi Pratama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Hobi */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Heart className="size-3.5 text-muted-foreground" /> Hobi Otomotif / Lainnya
            </label>
            <Input
              type="text"
              name="hobi"
              placeholder="Contoh: Restorasi Mobil Klasik, Touring"
              value={formData.hobi}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Mail className="size-3.5 text-muted-foreground" /> Alamat Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Alamat */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <MapPin className="size-3.5 text-muted-foreground" /> Alamat Lengkap
            </label>
            <Input
              type="text"
              name="alamat"
              placeholder="Jl. Sudirman No. 12, Jakarta"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 mt-2">
            Simpan Data
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}