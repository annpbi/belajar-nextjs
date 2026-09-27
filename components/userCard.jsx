"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFavorite } from "@/context/FavoriteContext";



export default function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const { isFavorite, toggleFavorite } = useFavorite();
  const favorited = isFavorite(user.id);

  return (
    <Card className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-sm font-semibold">
            {initials}
          </div>
          <CardTitle>{user.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{user.email}</p>

        <p className="mt-1 text-sm text-muted-foreground">
          {user.company.name}
        </p>

        <div className="mt-4 flex gap-2">
          <Button className="flex-1 rounded-full">Lihat Profil</Button>

          <Button
            variant={favorited ? "default" : "secondary"}
            onClick={() => toggleFavorite(user)}
            className="rounded-full gap-1.5"
          >
            <Heart className={`size-4 ${favorited ? "fill-current" : ""}`} />
            {favorited ? "Favorit" : "Pilih"}
          </Button>
        </div>
      </CardContent>
    </Card>
    
  );
}
