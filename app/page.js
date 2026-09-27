import Link from "next/link";
import { ArrowRight, Code2, Palette, Sparkles, Users2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Siaga Lapor",
    description:
      "Laporkan isu, dapatkan arahan, dan ambil tindakan.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "Pantau Cuaca",
    description:
      "Dapatkan infromasi cuaca terkini untuk mengetahui kondisi sekitar.",
    color: "accent",
  },
  {
    icon: Users2,
    title: "Tantangan",
    description:
      "Temukan aksi nyata yang sesuai untuk Anda dan lingkungan Anda..",
    color: "secondary",
  },
];

const iconColorMap = {
  primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary/20",
  accent: "bg-accent/10 text-accent group-hover:bg-accent/20",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-fade" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-blob absolute top-24 left-10 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-[100px]" />
        <div className="animate-blob absolute top-40 right-10 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-[100px] [animation-delay:4s]" />

        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-sm text-secondary">
              <Sparkles className="size-3.5" />
              Welcome to PARAS
            </div>

            <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              Satu Laporan, Satu Perubahan
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Suarakan masalah lingkungan yang Anda temui di sekitar.
              Setiap laporan dapat menjadi langkah awal menemukan solusi dan aksi bersama.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 shadow-lg shadow-primary/20")}
              >
                Jelajahi Layanan
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-secondary/30 px-6 text-secondary hover:bg-secondary/10"
                )}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Manfaat yang bisa Anda rasakan
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tersedia beberapa layanan untuk membantu Anda menghadapi isu iklim di sekitar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, color }) => (
            <Card
              key={title}
              className="group border border-border bg-card transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/10"
            >
              <CardHeader>
                <div
                  className={cn(
                    "mb-3 flex size-10 items-center justify-center rounded-lg transition-colors",
                    iconColorMap[color]
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center">
          <div className="bg-grid bg-radial-fade absolute inset-0 opacity-60" />
          <div className="absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-secondary/15 blur-[100px]" />
          <div className="absolute -top-10 -right-10 -z-10 h-48 w-48 rounded-full bg-primary/15 blur-[100px]" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Ada masalah di lingkungan Anda?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Yuk, laporkan keluhan Anda dan temukan solusinya!
            </p>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 rounded-full px-6"
              )}
            >
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}