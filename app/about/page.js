import { CheckCircle2 } from "lucide-react";

const values = [
  "Informasi BMKG disajikan sederhana dan terpercaya.",
  "Pelaporan parktis.",
  "Mendorong masyrakat terlibat dalam aktivitas berdampak.",
];

const stats = [
  { value: "15+", label: "Aksi komunitas berhasil" },
  { value: "5+", label: "Wilayah pulih" },
  { value: "100+", label: "Pengguna terbantu" },
  { value: "3", label: "Fitur utama" },
];

export default function AboutPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold text-primary">About Us</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Tentang PARAS
          </h1>

          <p className="mt-4 max-w-md text-muted-foreground">
            PARAS membantu masyarakat memahami informasi iklim dan kebencanaan, serta mendorong aksi nyata untuk lingkungan yang lebih tangguh.
          </p>

          <ul className="mt-8 space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6"
            >
              <p className="text-3xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
