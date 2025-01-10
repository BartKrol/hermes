import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const activeEdgesTable = sqliteTable("active_edges", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  active: int().notNull(),
});

export const documentsTable = sqliteTable("documents", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
});

export const settingsTable = sqliteTable("settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
});
