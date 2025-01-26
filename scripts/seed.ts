import { db } from "@/db/drizzle";
import { activeEdgesTable } from "@/db/schema";

const nodes = [
  "node_1",
  "node_2",
  "node_3",
  "node_4",
  "node_5",
  "node_6",
  "node_7",
  "node_8",
  "node_9",
  "node_10",
  "node_11",
];

async function main() {
  for (const node of nodes) {
    const nodeData: typeof activeEdgesTable.$inferInsert = {
      name: node,
      active: 0,
    };
    await db.insert(activeEdgesTable).values(nodeData);
  }
}

main();
