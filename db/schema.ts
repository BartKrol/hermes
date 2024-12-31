import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const activeEdgesTable = sqliteTable("active_edges", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  active: int().notNull(),
});

// export const envelopeTable = sqliteTable("envelopes", {
//   id: text().primaryKey(),
//   title: text().notNull(),
//   body: text().notNull(),
// });
