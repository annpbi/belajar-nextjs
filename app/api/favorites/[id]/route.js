import { removeFavorite, updateFavorite } from "@/lib/services/favoriteService";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const numId = Number(id);

  if (Number.isNaN(numId)) {
    return Response.json({ error: "ID tidak valid" }, { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body kosong atau bukan JSON yang valid" },
      { status: 400 }
    );
  }

  const result = updateFavorite(numId, body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ data: result.data });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const numId = Number(id);
  const result = await removeFavorite(numId);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: "Berhasil dihapus" });
}