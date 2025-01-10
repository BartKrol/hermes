"use server";

import { db } from "@/db/drizzle";
import { activeEdgesTable } from "@/db/schema";
import { getEdgeName } from "@/lib/edges";
import { eq } from "drizzle-orm";

export const getActiveEdges = async () => {
  const data = await db.select().from(activeEdgesTable);
  return new Set(data.map((edge) => getEdgeName(edge.name, edge.active)));
};

export const getActiveNodes = async () => {
  const data = await db.select().from(activeEdgesTable);
  return new Set(data.filter((edge) => edge.active).map((edge) => edge.name));
};

export const getActiveEdgeData = async (name: string) => {
  const data = await db
    .select()
    .from(activeEdgesTable)
    .where(eq(activeEdgesTable.name, name));
  return data[0];
};

export const getActiveEdgesData = async () => {
  const data = await db.select().from(activeEdgesTable);
  return data;
};

export const setActiveEdge = async (name: string, active: number) => {
  await db
    .update(activeEdgesTable)
    .set({ active })
    .where(eq(activeEdgesTable.name, name));
};
