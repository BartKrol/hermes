import "dotenv/config";

import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.DATABASE_URL ?? "file:./local.db", // TODO: Figure this out
});

export const db = drizzle(client, { schema });
