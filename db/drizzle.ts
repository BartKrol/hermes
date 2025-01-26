import "dotenv/config";

import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

import { createClient } from "@libsql/client";
import config from "@/config";

const client = createClient({
  url: config.DATABASE_URL,
});

export const db = drizzle(client, { schema });
