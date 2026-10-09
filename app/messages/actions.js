"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function deleteMessageAction(formData) {
  const supabase = await createClient();
  const id = formData.get("id");

  const { error, count } = await supabase
    .from("messages")
    .delete({ count: "exact" })
    .eq("id", id);

  if (error) throw new Error(error.message);
  if (count === 0) {
    throw new Error("Tidak ada data yang terhapus (cek RLS/policy)");
  }

  revalidatePath("/messages");
}