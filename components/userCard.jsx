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

export default function UserCard({ user, readOnlyNote = false }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const { favorites, isFavorite, toggleFavorite, updateNote } = useFavorite();
  const favorited = isFavorite(user.id);

  // note diambil dari context (sumber kebenaran), bukan dari state lokal
  const savedNote = favorites.find((f) => f.id === user.id)?.note ?? "";

  const [draft, setDraft] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleToggle() {
    try {
      await toggleFavorite(user);
      // reset supaya kalau difavoritkan lagi, kolom note kosong
      setDraft("");
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleSaveNote() {
    setSaving(true);
    try {
      await updateNote(user.id, draft.trim());
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  function handleEdit() {
    setDraft(savedNote);
    setIsEditing(true);
  }

  const showForm =
    favorited && !readOnlyNote && (!savedNote || isEditing);
  const showSavedNote = favorited && savedNote && !isEditing;

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
          {user.company?.name}
        </p>

        <div className="mt-4 flex gap-2">
          <Button className="flex-1 rounded-full">Lihat Profil</Button>

          <Button
            variant={favorited ? "default" : "secondary"}
            onClick={handleToggle}
            className="rounded-full gap-1.5"
          >
            <Heart className={`size-4 ${favorited ? "fill-current" : ""}`} />
            {favorited ? "Favorit" : "Pilih"}
          </Button>
        </div>

        {showForm && (
          <div className="mt-4 space-y-2">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Kenapa kamu favoritkan orang ini?"
              className="w-full rounded-md border border-white/10 bg-transparent p-2 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              rows={2}
            />
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              onClick={handleSaveNote}
              disabled={saving || !draft.trim()}
            >
              {saving ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        )}

        {showSavedNote && (
          <div className="mt-4 flex items-start justify-between gap-2">
            <p className="text-sm text-muted-foreground">{savedNote}</p>

            {!readOnlyNote && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-full"
                onClick={handleEdit}
              >
                Edit
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}