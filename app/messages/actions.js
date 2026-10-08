"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function deleteMessageAction(formData) {
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