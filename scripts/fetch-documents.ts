#!/usr/bin/env tsx

import "dotenv/config";
import { fetchAllDocuments } from "@/db/documents";

async function main() {
  console.log("🚀 Starting document fetch and download process...");
  console.log(
    "This will download all documents referenced in events.json from Contentful and save them to the database.\n"
  );

  try {
    const results = await fetchAllDocuments();

    console.log("\n✅ Document fetch completed!");
    console.log(`📊 Summary:`);
    console.log(`   - Successfully downloaded: ${results.success} documents`);
    console.log(`   - Failed downloads: ${results.failed} documents`);

    if (results.errors.length > 0) {
      console.log(`\n❌ Errors encountered:`);
      results.errors.forEach((error: string, index: number) => {
        console.log(`   ${index + 1}. ${error}`);
      });
    }

    if (results.failed === 0) {
      console.log("\n🎉 All documents downloaded successfully!");
    } else {
      console.log(
        `\n⚠️  ${results.failed} documents failed to download - check errors above`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error("\n💥 Fatal error during document fetch:");
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("💥 Unexpected error:", error);
  process.exit(1);
});
