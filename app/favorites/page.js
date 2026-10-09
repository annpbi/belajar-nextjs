"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import UserCard from "@/components/userCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Favorite</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Pengguna Favorit Paras
          </h1>
          <p className="mt-4 text-muted-foreground">
            Daftar pengguna PARAS yang difavoritkan.
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((favorite) => (
              <UserCard
                key={favorite.id}
                user={{
                  id: favorite.app_users.id,
                  name: favorite.app_users.name,
                  email: favorite.app_users.email,
                  company: { name: favorite.app_users.company_name },
                }}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
            <Heart className="size-8" />
            <p>Belum ada user favorit. Tentukan pengguna favorit di Pengguna PARAS.</p>
            <Link
              href="/users"
              className="text-sm font-medium text-primary hover:underline"
            >
              Pengguna PARAS →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}