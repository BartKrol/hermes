"use server";

import { db } from "@/db/drizzle";
import { activeEdgesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_cache, revalidateTag } from "next/cache";
import { zfd } from "zod-form-data";

const activeEdgesTag = "activeEdges";

export const getActiveNodes = unstable_cache(
  async () => {
    const data = await db.select().from(activeEdgesTable);
    return new Set(data.filter((edge) => edge.active).map((edge) => edge.name));
  },
  ["getActiveNodes"],
  { tags: [activeEdgesTag] }
);

export const getActiveEdgeData = unstable_cache(
  async (name: string) => {
    const data = await db
      .select()
      .from(activeEdgesTable)
      .where(eq(activeEdgesTable.name, name));
    return data[0];
  },
  ["getActiveEdgeData"],
  { tags: ["activeEdges"] }
);

export const refreshActiveEdges = async () => {
  revalidateTag(activeEdgesTag);
};

export const getActiveEdgesData = unstable_cache(
  async () => {
    const data = await db.select().from(activeEdgesTable);
    return data;
  },
  ["getActiveEdgesData"],
  { tags: [activeEdgesTag] }
);

const setActiveEdgeSchema = zfd.formData({
  node: zfd.text(),
  active: zfd.numeric(),
});

export const setActiveEdgeForm = async (data: FormData) => {
  const { node, active } = setActiveEdgeSchema.parse(data);
  const flippedActive = active ? 0 : 1;

  await setActiveEdge(node, flippedActive);
};

export const setActiveEdge = async (node: string, active: number) => {
  await db
    .update(activeEdgesTable)
    .set({ active: active })
    .where(eq(activeEdgesTable.name, node));

  revalidateTag(activeEdgesTag);
};
