"use client";

import { useState } from "react";
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

  const { isFavorite, toggleFavorite, updateNote } = useFavorite();
  const favorited = isFavorite(user.id);

  const [note, setNote] = useState(user.note || "");
  const [saving, setSaving] = useState(false);

  async function handleSaveNote() {
    setSaving(true);
    try {
      await updateNote(user.id, note);
    } catch (err) {
      alert("Gagal menyimpan catatan");
    } finally {
      setSaving(false);
    }
  }

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

        {favorited && (
          <div className="mt-4 space-y-2">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Kenapa kamu favoritkan orang ini?"
              className="w-full rounded-md border border-white/10 bg-transparent p-2 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              rows={2}
            />
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              onClick={handleSaveNote}
              disabled={saving}
            >
              {saving ? "Menyimpan..." : "Simpan Catatan"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
    
  );
}
