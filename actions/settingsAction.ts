"use server";

import { db } from "@/db/drizzle";
import { settingsTable } from "@/db/schema";
import { Settings } from "@/lib/settings";

export async function getSettings() {
  const data = await db.select().from(settingsTable);
  return data.reduce((acc, { key, value }) => {
    acc[key as Settings] = value;
    return acc;
  }, {} as Record<Settings, string>);
}

export async function setTime(date: Date) {
  await db
    .insert(settingsTable)
    .values({ key: Settings.EndTime, value: date.toISOString() })
    .onConflictDoUpdate({
      target: settingsTable.key,
      set: { value: date.toISOString() },
    });

  return await getSettings();
}
